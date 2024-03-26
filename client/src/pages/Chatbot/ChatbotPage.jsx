/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// Component
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";

import ChatBot from "./ChatBot";

const ChatbotPage = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftsideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <ChatBot />
      </div>
    </div>
  );
};

export default ChatbotPage;
