import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SButtons from "../icons/buttons";
import "./buttons.scss";

export default function Sb(props) {
  const { title, link } = props.content;

  return (
    <Link to={link} className={`sm-buttons sb-${title}-style`}>
      {SButtons(title)}
    </Link>
  );
}

Sb.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};
