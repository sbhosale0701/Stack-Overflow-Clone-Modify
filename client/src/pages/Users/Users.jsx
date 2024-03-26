/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// Style Sheet
import "./Users_style.scss";

// Components
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import UsersList from "./UsersList";
const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftsideBar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2" style={{ marginTop: "6rem", flexDirection: "column" }}>
        <h1 style={{ fontWeight: "400", fontSize: "revert" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
