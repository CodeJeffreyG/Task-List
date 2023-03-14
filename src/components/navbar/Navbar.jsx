import React, { useState } from "react";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Hamburger from "../hamburger/Hamburger";

const Navbar = () => {
  let [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    console.log("it Worked!");
    setHamburger((prevHamburger) => !prevHamburger);
  };

  return (
    <nav>
      <div>Task-List</div>
      <MenuIcon className="hamburger" onClick={handleClick} />
    </nav>
  );
};

export default Navbar;
