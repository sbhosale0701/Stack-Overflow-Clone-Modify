/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";

import Avatar from "../Avatar/Avatar";
import { setCurrentUser } from "../../actions/currentUser";

// Import style sheet
import "./style.scss";

// ICON links
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";

const Navbar = ({ handleSlideIn }) => {
  // Define variables
  let User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Functions For Log Out

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);
  return (
    <nav className="main_nav">
      <div className="navbar">
        <button className="humbugger-icon" onClick={() => handleSlideIn()}>
          <i className="ri-menu-fill"></i>
        </button>

        <div className="mid-nav">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="Overflow" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>

          <form>
            <input type="text" placeholder="Search.." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="end-nav">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar backgroundColor="#009dff" px="12px" py="7px" borderRadius="50%" color="white">
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
