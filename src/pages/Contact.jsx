import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      {/* LEFT */}
      <div className="contact-left">
        <h1>CONTACT</h1>
        <p>
          For collaborations, inquiries, or wholesale opportunities,
          reach out to Outfit Junior.
        </p>

        <div className="contact-info">
          <p className="contact-email">outfitjuniors@gmail.com</p>

          <div className="social-links">
            <a
              href="https://instagram.com/outfit.junior"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://tiktok.com/@outfit.junior"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="contact-right">
        <input type="text" placeholder="NAME" />
        <input type="email" placeholder="EMAIL" />
        <textarea placeholder="MESSAGE" />

        <button>SEND MESSAGE</button>
      </div>
    </section>
  );
}
