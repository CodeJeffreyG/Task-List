import React, { useState } from "react";

import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Hamburger from "../hamburger/Hamburger";

const Navbar = () => {
  let [hamburger, setHamburger] = useState(true);

  const handleClick = () => {
    console.log("it Worked!");
    setHamburger((prevHamburger) => !prevHamburger);
  };

  //mobile hamburger menu
  if (hamburger) {
    return (
      <nav>
        <div>Task-List</div>
        <MenuIcon className="hamburger" onClick={handleClick} />
      </nav>
    );
  }
  //mobile hamburger menue
  if (!hamburger) {
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
};

export default Navbar;
