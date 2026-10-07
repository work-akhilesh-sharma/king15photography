import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 150;
const MAX_PHONE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 3000;

const requests = new Map<string, number[]>();

function getClientIP(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(
  ip: string,
  maxRequests = 5,
  windowMs = 10 * 60 * 1000
): boolean {
  const now = Date.now();
  const timestamps = requests.get(ip) || [];

  const recentRequests = timestamps.filter(
    (timeStamp) => now - timeStamp < windowMs
  )

  if (recentRequests.length >= maxRequests) {
    requests.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requests.set(ip, recentRequests);

  return false;
}

function containsControlCharacters(value: string): boolean {
  return /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value);
}

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = getClientIP(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again after some time.",
        },
        { status: 429 }
      );
    }

    // Content-Type check
    const contentType = request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request.",
        },
        { status: 415 }
      );
    }

    // Origin check
    const origin = request.headers.get("origin");

    const allowedOrigins = [
      "http://localhost:3000",
      "https://king15photography.in",
      "https://www.king15photography.in",
    ];

    if (origin && !allowedOrigins.includes(origin)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid origin.",
        },
        { status: 403 }
      );
    }

    // Parse JSON
    let body: unknown;

    // const body = (await request.json()) as ContactRequest;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body.",
        },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request.",
        },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;
    
    // Read fields
    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const phone = typeof data.phone === "string" ? data.phone.trim() : "";
    const message = typeof data.message === "string" ? data.message.trim() : "";

    // Honeypot field
    const website = typeof data.website === "string" ? data.website.trim() : "";

    // Honeypot
    if (website !== "") {
      // pretend succeed
      return NextResponse.json({
        success: true,
        message: "Thank you! Your enquiry has been sent successfully.",
      });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message fields are required.",
        },
        { status: 400 }
      );
    }

    // length validation
    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 }
      );
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is too long.",
        },
        { status: 400 }
      );
    }

    if (phone.length > MAX_PHONE_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is too long.",
        },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 }
      );
    }

    // Control character protection
    if (
      containsControlCharacters(name) ||
      containsControlCharacters(email) ||
      containsControlCharacters(phone) ||
      containsControlCharacters(message)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid characters detected.",
        },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Phone validation
    if (phone && !/^[0-9+\-\s()]{7,20}$/.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid phone number.",
        },
        { status: 400 }
      );
    }

    // Escape HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br />"
    );

    // Environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (
      !smtpHost ||
      !smtpPort ||
      !smtpUser ||
      !smtpPassword ||
      !contactEmail
    ) {
      console.error("SMTP configuration is missing");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is currently unavailable.",
        },
        { status: 500 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,

      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    /*
     * =====================================================
     * 1. EMAIL TO WEBSITE OWNER
     * =====================================================
     */

    await transporter.sendMail({
      from: `"King15 Photography Website" <${smtpUser}>`,
      to: contactEmail,

      // Very useful when owner clicks Reply
      replyTo: email,

      subject: `New Photography Enquiry from ${safeName}`,

      text: `
New enquiry received from King15 Photography website.

Name:
${name}

Email:
${email}

Phone:
${phone || "Not provided"}

Message:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Photography Enquiry</h2>

          <p>You have received a new enquiry from your website.</p>

          <hr />

          <p>
            <strong>Name:</strong><br />
            ${safeName}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${safeEmail}
          </p>

          <p>
            <strong>Phone:</strong><br />
            ${safePhone}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${safeMessage}
          </p>

          <hr />

          <p>
            You can reply directly to this email to contact the customer.
          </p>
        </div>
      `,
    });

    /*
     * =====================================================
     * 2. CONFIRMATION EMAIL TO CUSTOMER
     * =====================================================
     */

    await transporter.sendMail({
      from: `"King15 Photography" <${smtpUser}>`,
      to: email,

      subject: "Thank you for contacting King15 Photography",

      text: `
Hi ${safeName},

Thank you for contacting King15 Photography.

We have received your enquiry and will get back to you soon.

Your enquiry:

${safeMessage}

Regards,
King15 Photography
      `,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          
          <h2>Thank You, ${safeName}!</h2>

          <p>
            Thank you for contacting <strong>King15 Photography</strong>.
          </p>

          <p>
            We have received your enquiry and will get back to you soon.
          </p>

          <hr />

          <h3>Your Enquiry</h3>

          <p>
            ${safeMessage}
          </p>

          <hr />

          <p>
            Regards,<br />
            <strong>King15 Photography</strong>
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your enquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}


/*
 * Prevent HTML injection in email body
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}