import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaEnvelope
} from "react-icons/fa";
import "./Footer.css";

export default function Footer({ minimal }) {
  return (
    <footer className={minimal ? "footer footer-minimal" : "footer"}>
      <a href="mailto:outfitjuniors@gmail.com" aria-label="Email">
        <FaEnvelope />
      </a>

      <a
        href="https://instagram.com/outfit.junior"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://tiktok.com/@outfit.junior"
        target="_blank"
        rel="noreferrer"
        aria-label="TikTok"
      >
        <FaTiktok />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
    </footer>
  );
}
