import mongoose from "mongoose";

// Import models
import Questions from "../models/Question.js";

//@ Mechanism for Create or Asking Question ----------------
export const AskQuestion = async (req, res) => {
  const postQuestionData = req.body;
  // const userId = req.userId;
  const postQuestion = new Questions(postQuestionData);
  try {
    await postQuestion.save();
    res.status(200).json("Successfully,Posted a question !!");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't post a new question");
  }
};

//@ Mechanism for fetch all Question ----------------
export const getAllQuestions = async (req, res) => {
  try {
    const questionList = await Questions.find();
    // const questionList = await Questions.find().sort({ askedOn: -1 });
    res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@ Mechanism for Delete a Question ----------------
export const deleteQuestion = async (req, res) => {
  const { id: _id } = req.params;

  // Check even Question with This id  present or not
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable...");
  }

  try {
    await Questions.findByIdAndRemove(_id);
    res.status(200).json({ message: "Successfully Deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@ Mechanism for Voting ans/ Question ----------------

// Vote work like  0 <- - ---[1]---+-> 2
export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  const { value, userId } = req.body;
  // const userId = req.userId;

  // try to find is question exist or not
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("question unavailable...");
  }

  try {
    const question = await Questions.findById(_id);
    // get voting count
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex((id) => id === String(userId));

    // Try to Vote increase
    if (value === "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter((id) => id !== String(userId));
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }

      // Try to Decrease the vote
    } else if (value === "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter((id) => id !== String(userId));
      }
    }
    await Questions.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "voted successfully..." });
  } catch (error) {
    res.status(404).json({ message: "id not found" });
  }
};
