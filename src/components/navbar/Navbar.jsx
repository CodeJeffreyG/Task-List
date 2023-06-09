import React, { useState, useEffect } from "react";

import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Hamburger from "../hamburger/Hamburger";

const Navbar = () => {
  let [hamburger, setHamburger] = useState(true);
  let [resize, setResize] = useState(null);

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
  }, []);

  window.addEventListener("resize", handleResize);

  const handleClick = () => {
    setHamburger((prevHamburger) => !prevHamburger);
    if (resize > 750) setHamburger(false);
  };

  //mobile hamburger menu
  if (hamburger && resize < 750) {
    return (
      <nav>
        <div>Task-List</div>
        <MenuIcon className="hamburger" onClick={handleClick} />
      </nav>
    );
  }

  //mobile hamburger menue
  if (!hamburger && resize < 750) {
    return (
      <>
        <nav>
          <div></div>
          <CloseIcon onClick={handleClick} className="X" />
        </nav>
        <Hamburger handleClick={handleClick} />;
      </>
    );
  }
  //tablet size

  if (resize > 749) {
    return (
      <nav className="not-mobile">
        <div>Task-List</div>
        <Hamburger className="not-mobile-routes" resize={resize} />
      </nav>
    );
  }
};

export default Navbar;
