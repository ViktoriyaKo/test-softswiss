import { CartIcon } from "../../ui";
import { NAV_LINKS } from "../../constants";

const NavigationMenu = () => {
  return (
    <ul className="header__list">
      {NAV_LINKS.map((item) => {
        const { name, href } = item;
        return (
          <li key={name}>
            <a className="header__item" href={href}>
              {name}
            </a>
          </li>
        );
      })}
      <CartIcon />
    </ul>
  );
};

export default NavigationMenu;
