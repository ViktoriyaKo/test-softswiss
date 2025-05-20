import "./Header.scss";
import { LogoIcon } from "../../ui";
import NavigationMenu from "./NavigationMenu";
import NavBar from "./NavBar";

// added # instead of Link from "react-router-dom"
const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <a href={"#"} className="header__logo">
          <LogoIcon />
        </a>

        <div className="header__menu-desktop">
          <NavigationMenu />
        </div>

        <NavBar />
      </nav>
    </header>
  );
};
export default Header;
