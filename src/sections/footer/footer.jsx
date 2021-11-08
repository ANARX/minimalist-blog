import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Sb from "../../components/social-buttons/buttons";
import "./footer.scss";

export default function Footer() {
  const [socialButtons, setSocialButtons] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("mocks/social-links.json")
      .then((res) => res.json())
      .then((data) => setSocialButtons(data.data));
    fetch("mocks/contacts.json")
      .then((res) => res.json())
      .then((data) => setContacts(data.data));
  }, []);

  return (
    <footer className="footer-section">
      <h2 className="footer-header">GET IN TOUCH WITH US</h2>
      <p className="footer-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut,
        eveniet excepturi aliquam repellendus adipisci?{" "}
      </p>
      <div className="sb-container">
        {socialButtons.map((item) => (
          <Sb content={item} key={uuid()} />
        ))}
      </div>
      {contacts.map((item) => (
        <a
          href={item.link}
          className="footer-text"
          target="_blank"
          rel="noreferrer"
          key={uuid()}
        >
          {item.title}
        </a>
      ))}
    </footer>
  );
}
