import React, { Component } from "react";
import "./index.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <ul className="nav-menu">
              <li className="nav-links">
                <a className="nav-link" href="#">
                  Home
                  <span></span>
                </a>
              </li>
              <li className="nav-links">
                <a className="nav-link" href="#">
                  Business
                  <span></span>
                </a>
              </li>
              <li className="nav-links">
                <a className="nav-link" href="#">
                  Entertainment
                  <span></span>
                </a>
              </li>
              <li className="nav-links">
                <a className="nav-link" href="#">
                  General
                  <span></span>
                </a>
              </li>
              <li className="nav-links">
                <a className="nav-link" href="#">
                  Health
                  <span></span>
                </a>
              </li>
              <li className="nav-links">
                <a className="nav-link" href="#">
                  Science
                  <span></span>
                </a>
              </li>
              <li className="nav-links">
                <a className="nav-link" href="#">
                  Sports
                  <span></span>
                </a>
              </li>
              <li className="nav-links">
                <a className="nav-link" href="#">
                  Technology
                  <span></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
