import { Link } from "react-router-dom";
import '../assets/Css/megamenu.css';
import { FILTER_CONFIG } from '../utils/filters';

export default function MegaMenu({ category, isOpen }) {
  const menuContent = {
    aliancas: {
      sections: [
        {
          title: "Alianças",
          items: FILTER_CONFIG["Alianças"]
        },
      ]
    },
    brincos: {
      sections: [
        {
          title: "Brincos",
          items: FILTER_CONFIG["Brincos"]
        },
      ]
    },
    pingentes: {
      sections: [
        {
          title: "Pingentes",
          items: FILTER_CONFIG["Pingentes"]
        },
      ]
    },
    aneis: {
      sections: [
        {
          title: "Anéis",
          items: FILTER_CONFIG["Anéis"]
        },
      ]
    }
  };

  const content = menuContent[category];

  if (!content || !isOpen) return null;

  return (
    <div className="mega-menu">
      <div className="mega-menu__content">
        {content.sections.map((section, index) => (
          <div key={index} className="mega-menu__section">
            {section.items.length > 0 && (
              <ul className="mega-menu__list">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={`/shop?title=${section.title}&filter=${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}