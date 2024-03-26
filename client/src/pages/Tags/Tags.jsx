/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// Components
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import TagsList from "./TagsList";
// Tag Details form other file
import { tagsList } from "./tagDetails";

// Style Sheet
import "./tag_style.scss";

const Tags = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftsideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ flexDirection: "column", paddingRight: "1rem" }}>
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other, similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer your question.
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag, index) => (
            <TagsList tag={tag} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
