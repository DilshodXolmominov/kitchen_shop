import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
    return (
    <nav>
        <div className="nav-wrapper #5e35b1 deep-purple darken-1">
          <Link to="/home " className="brand-logo">Kitchen</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">About</Link>
              </li>
            <li>
              <Link to="/contact">Contact</Link>
              </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;