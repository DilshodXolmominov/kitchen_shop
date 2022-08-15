import React from 'react';
import {Link} from "react-router-dom"

function Footer() {
    return (
        <footer className="page-footer #5e35b1 deep-purple darken-1">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <Link className="grey-text text-lighten-4 right" to="/">Repo</Link>
          </div>
        </div>
      </footer>
    );
}

export default Footer;