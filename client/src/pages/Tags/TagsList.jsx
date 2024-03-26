/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./tag_style.scss";
const TagsList = ({ tag }) => {
  return (
    <div className="tag">
      <h5>{tag.tagName}</h5>
      <p>{tag.tagDesc}</p>
    </div>
  );
};

export default TagsList;
