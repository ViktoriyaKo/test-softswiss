import { useState } from "react";
import { BurgerIcon, CloseIcon } from "../../ui";
import NavigationMenu from "./NavigationMenu";
import { useLockBodyScroll } from "../../hooks";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  useLockBodyScroll(isOpen);

  return (
    <>
      <div
        className={"header__menu-icon"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {isOpen ? <CloseIcon /> : <BurgerIcon />}
      </div>

      {isOpen && (
        <div className={`header__navbar`}>
          <NavigationMenu />
        </div>
      )}
    </>
  );
};

export default NavBar;
