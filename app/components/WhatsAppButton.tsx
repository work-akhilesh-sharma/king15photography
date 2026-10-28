import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const phoneNumber = "918802890848";
  const message = encodeURIComponent(
    "Hi King15Photography, I would like to enquire about your photography services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className={styles.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with King15Photography on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 .5A15.3 15.3 0 0 0 2.8 23.6L.7 31.3l7.9-2.1A15.5 15.5 0 1 0 16 .5Zm0 27.8a12.4 12.4 0 0 1-6.3-1.7l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.4 12.4 0 1 1 16 28.3Zm6.8-9.3c-.4-.2-2.2-1.1-2.6-1.2-.4-.2-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.4.3-.8.1a10.2 10.2 0 0 1-3-1.9 11.1 11.1 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.3 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.5 3.8 1.7 4.1c.2.3 2.9 4.4 7 6.2 1 .4 1.8.7 2.4.8 1 .3 1.9.2 2.6.1.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z" />
      </svg>
    </a>
  );
}
