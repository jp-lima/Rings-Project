import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../assets/Css/socialbuttons.css";

export default function SocialButtons() {
  const atendentes = [
    "5582991394107", 
    "5581935000006", 
  ];

  const abrirWhatsApp = () => {
    const numero =
      atendentes[Math.floor(Math.random() * atendentes.length)];

    window.open(`https://wa.me/${numero}`, "_blank");
  };
  return (
    <div className="social-container">
      <button onClick={abrirWhatsApp} className="social-btn whatsapp">
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>

      <a
        href="https://instagram.com/aliancaseternasofc"
        target="_blank"
        rel="noopener noreferrer"
        className="social-btn instagram"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}