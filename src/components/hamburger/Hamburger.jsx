import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./hamburger.scss";

const Hamburger = (props) => {
  //tablet size
  if (props.resize > 750) {
    return (
      <ul className="tablet">
        <li>All Tasks</li>
        <li>Projects</li>
        <li>Issues</li>
        <li>Meetings</li>
      </ul>
    );
  }

  //mobile size
  return (
    <main>
      <ul>
        <li>
          <Link className="link" onClick={props.handleClick} to="/">
            All Tasks
          </Link>
        </li>
        <li>
          <Link className="link" onClick={props.handleClick} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" onClick={props.handleClick} to="/issues">
            Issues
          </Link>
        </li>
        <li>
          <Link className="link" onClick={props.handleClick} to="/meetings">
            Meetings
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Hamburger;
