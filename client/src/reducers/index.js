/* eslint-disable no-unused-vars */
import { combineReducers } from "redux";

// Import All reducers
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./question";
import usersReducer from "./users";
import verifyReducer from "./verify";
import chatbotReducer from "./chatbot";
import paymentReducer from "./payment";
import apikeyReducer from "./apiKey";
import subscriptionReducer from "./subscription";

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  verifyReducer,
  chatbotReducer,
  paymentReducer,
  apikeyReducer,
  subscriptionReducer,
});
