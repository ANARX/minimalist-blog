import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import "./post.scss";

export default function Post(props) {
  const { title, image, link, desc, comments, categories } = props.content;

  function renderCategories(categories) {
    return categories.map((item) => (
      <Link to={item.link} className="post-category" key={uuid()}>
        {item.title}
      </Link>
    ));
  }

  function renderDesc(description) {
    return description.map((item) => (
      <p className="post-description" key={uuid()}>
        {item}
      </p>
    ));
  }

  return (
    <div>
      <div className="recent-post-item">
        <img src={image} alt="post" className="post-image" />
        <div className="post-info">
          <Link to={link} className="post-title">
            {title}
          </Link>
          <div className="post-meta">
            <div className="post-category-box">
              {renderCategories(categories)}
            </div>
            <Link
              to="/"
              className="post-comments"
            >{`${comments} comments`}</Link>
          </div>
          {renderDesc(desc)}
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.number.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
