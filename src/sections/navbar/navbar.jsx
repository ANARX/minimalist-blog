import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import { ReactComponent as MenuButton } from "../../components/icons/menu/menu.svg";
import { ReactComponent as CrossButton } from "../../components/icons/menu/cross.svg";
import "./navbar.scss";

export default function Navbar() {
  const [navbarItems, setNavbarItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState([false]);

  useEffect(() => {
    fetch("mocks/navbar-links.json")
      .then((res) => res.json())
      .then((data) => setNavbarItems(data.data));
  }, []);

  function renderMenuItems(navbarItems) {
    return navbarItems.map((item) => {
      if (item.enabled) {
        return (
          <Link to={item.link} className="navbar-link" key={uuid()}>
            {item.value}
          </Link>
        );
      }
      return null;
    });
  }

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <section className="navigation-bar-section">
      <div className="hamburger-menu-container">
        <div className="hamburger-menu" onClick={() => handleMenuClick()}>
          {isMenuOpen && (
            <MenuButton id="hamburger-button" className="hamburger-button" />
          )}
          {!isMenuOpen && (
            <CrossButton id="cross-button" className="hamburger-cross" />
          )}
        </div>
      </div>
      <nav
        id="navbar"
        className={clsx("navbar", isMenuOpen ? "navbar-closed" : null)}
      >
        {renderMenuItems(navbarItems)}
      </nav>
    </section>
  );
}
