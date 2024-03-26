/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Question from "./Question";

const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </>
  );
};

export default QuestionList;
