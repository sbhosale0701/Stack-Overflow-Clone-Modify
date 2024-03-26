/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import component
import Authenticate from "./pages/Auth/Authenticate";
import Home from "./pages/Home/Home";
import AskQuestion from "./pages/AskQuestoin/AskQuestion";
import Questions from "./pages/Questions/Questions";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import UserProfile from "./pages/UserProfile/UserProfile";
import OtpAuth from "./pages/OTPauth/OtpAuth";
import ChatbotPage from "./pages/Chatbot/ChatbotPage";
import SubscriptionPage from "./pages/Subscription/SubscriptionPage";
import Success from "./pages/Subscription/Success";

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
      <Route path="/Auth" element={<Authenticate />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route
        path="/Questions"
        element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={<DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Tags" element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
      <Route path="/Users" element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
      <Route
        path="/Users/:id"
        element={<UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />

      <Route path="/OtpAuth" element={<OtpAuth />} />

      <Route
        path="/Chatbot"
        element={<ChatbotPage slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Subscription"
        element={<SubscriptionPage slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/paymentsuccess" element={<Success />} />
    </Routes>
  );
};

export default AllRoutes;
