import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./hamburger.scss";

const Hamburger = (props) => {
  return (
    <main>
      <ul>
        <li className="link">
          <Link onClick={props.handleClick} to="/">
            All Tasks
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} to="/issues">
            Issues
          </Link>
        </li>
        <li>
          <Link onClick={props.handleClick} to="/meetings">
            Meetings
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Hamburger;
