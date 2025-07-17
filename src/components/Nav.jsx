import { NavLink } from 'react-router';
import React from 'react';

function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">PageTurner</NavLink></li>
        <li>
          <NavLink to="/posts/new">
            <i className="ri-add-box-fill" />
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}
export default Nav;
