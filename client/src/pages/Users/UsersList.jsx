/* eslint-disable no-unused-vars */

import React from "react";
import { useSelector } from "react-redux";

// Style Sheet
import "./Users_style.scss";

import User from "./User";

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);

  return (
    <div className="user-list-container">
      {users.map((user) => (
        <User user={user} key={user?._id} />
      ))}
    </div>
  );
};

export default UsersList;
