import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shots.scss";

export default function Shots() {
  const [shots, setShots] = useState([]);

  useEffect(() => {
    fetch("mocks/insta-shots.json")
      .then((res) => res.json())
      .then((data) => setShots(data.data));
  }, []);

  return (
    <section className="instagram-shots-section">
      <h2 className="instagram-shot-header">LATEST INSTAGRAM SHOTS</h2>
      <Link to="/" className="instagram-link">
        GO TO OUR INSTAGRAM PAGE
      </Link>
      {shots.map((item, index) => {
        return (
          <Link
            to="/"
            className={`instagram-shot-item-${++index}`}
            key={`shot-${++index}`}
          >
            <img
              className="instagram-shot-image"
              src={item.media}
              alt={item.desc}
            />
          </Link>
        );
      })}
    </section>
  );
}
