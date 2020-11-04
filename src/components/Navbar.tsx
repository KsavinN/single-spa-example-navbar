import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/vue">Vue</NavLink>
        </li>
        <li>
          <NavLink to="/angular">Angular</NavLink>
        </li>
        <li>
          <NavLink to="/react">React</NavLink>
        </li>
      </ul>
      <hr />
    </nav>
  );
};
