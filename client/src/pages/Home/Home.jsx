/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import dependencies
import React from "react";
import "../../App.css";
// import Components
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import HomeMainbar from "../../components/MainHerosection/HomeMainbar";
import RightSideBar from "../../components/RIghtsideBar/RightSideBar";
const Home = ({ slideIn }) => {
  return (
    <div className="home-container-1">
      <LeftsideBar slideIn={slideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
