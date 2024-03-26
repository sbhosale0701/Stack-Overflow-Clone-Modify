/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import Subscription from "./Subscription";

const SubscriptionPage = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftsideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <Subscription />
      </div>
    </div>
  );
};

export default SubscriptionPage;
