/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { askQuestion } from "../../actions/question";
import { subscriptionValidationCheck } from "../../actions/subscription";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const User = useSelector((state) => state.currentUserReducer);
  const subscriptionDetails = User?.result?.subscription;

  let numberOfQues = subscriptionDetails?.attempts;

  // Checking the user subscription-Pack's Validity expire or not
  useEffect(() => {
    const id = User?.result?._id;
    dispatch(subscriptionValidationCheck({ id }));
  }, [User, dispatch]);

  useEffect(() => {
    if (User !== null) {
      if (!localStorage.getItem("TryLeft")) {
        // If there no data create a data ( it happen after 24hrs)
        localStorage.setItem("TryLeft", JSON.stringify({ attempt: numberOfQues }));
      }
    }
  }, [User, numberOfQues]);

  // If After Create , Get data
  if (localStorage.getItem("TryLeft")) {
    var attempt_Left = JSON.parse(localStorage.getItem("TryLeft")).attempt;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      // if check Subscription
      if (attempt_Left === 0) {
        alert("Number of Post Exceed the limit \nAdvance Your Subscription !! ");
      } else {
        if (questionTitle && questionBody && questionTags) {
          // Decrease the Number
          attempt_Left = attempt_Left - 1;
          localStorage.setItem("TryLeft", JSON.stringify({ attempt: attempt_Left }));

          dispatch(
            askQuestion(
              {
                questionTitle,
                questionBody,
                questionTags,
                userPosted: User.result.name,
                userId: User.result._id,
              },
              navigate
            )
          );
        } else alert("Please enter all the fields");
      }
    } else alert("Login to ask question");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and imagine you are asking a question to another person</p>
              <input
                type="text"
                id="ask-ques-title"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea
                name=""
                id="ask-ques-body"
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                id="ask-ques-tags"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
                placeholder="e.g. (xml typescript wordpress)"
              />
            </label>
          </div>
          <input type="submit" value="Reivew your question" className="review-btn" />
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
