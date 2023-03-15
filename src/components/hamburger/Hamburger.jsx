import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./hamburger.scss";

const Hamburger = () => {
  return (
    <main>
      <ul>
        <li>All Tasks</li>
        <li>Projects</li>
        <li>Issues</li>
        <li>Meetings</li>
      </ul>
    </main>
  );
};

export default Hamburger;
