import "./Header.scss";
import { CartIcon, LogoIcon } from "../../ui";

// TODO add link!

const Header = () => {
  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Products ", href: "/products" },
  ];

  return (
    <header className="header">
      <nav className="header__nav">
        <LogoIcon />

        <ul className="header__list">
          {navItems.map((item) => {
            const { name, href } = item;
            return (
              <li key={href} className="header__item">
                {name}
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
