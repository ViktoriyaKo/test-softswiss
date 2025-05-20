import "./Header.scss";
import { CartIcon, LogoIcon } from "../../ui";

// added # instead of Link from "react-router-dom"

const Header = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Products ", href: "#" },
  ];

  return (
    <header className="header">
      <nav className="header__nav">
        <a href={"#"} className="header__logo">
          <LogoIcon />
        </a>

        <ul className="header__list">
          {navItems.map((item) => {
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
      </nav>
    </header>
  );
};
export default Header;
