import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
