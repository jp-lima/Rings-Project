import { Link } from "react-router-dom";
import '../assets/Css/megamenu.css';

export default function MegaMenu({ category, isOpen }) {
  const menuContent = {
    aliancas: {
      sections: [
        {
          title: "Alianças",
          items: [
            "Moeda Antiga com Banho a Ouro 18k",
            "Prata",
            "Ouro 10k",
          ]
        },
      ]
    },
    brincos: {
      sections: [
        
        {
          title: "Brincos",
          items: [
           "Moeda Antiga com Banho a Ouro 18k"
          ]
        },
      ]
    },
    pingentes: {

      sections: [
        {
          title: "Pingentes",
          items: [
             "Moeda Antiga com Banho a Ouro 18k"
          ]
        },
      ]
    },
    aneis: {

      sections: [
        {
          title: "Anéis",
          items: [
            "Formatura",
            "Masculinos Moeda",
            "Solitários e Aparadores Moeda",
            "Prata",
          ]
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