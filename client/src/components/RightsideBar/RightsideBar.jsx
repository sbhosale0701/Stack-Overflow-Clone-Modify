/* eslint-disable react/jsx-no-undef */
import React from "react";
import "./Style.scss";
import Widget from "./Widget";
import WidgetTag from "./WidgetTag";

const RightSideBar = () => {
  return (
    <aside className="right-sidebar">
      <Widget />
      <WidgetTag />
    </aside>
  );
};

export default RightSideBar;
