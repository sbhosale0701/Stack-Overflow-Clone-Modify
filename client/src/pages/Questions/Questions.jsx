/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import RightSideBar from "../../components/RightsideBar/RightsideBar";
import HomeMainbar from "../../components/MainHerosection/HomeMainbar";

const Questions = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftsideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Questions;
