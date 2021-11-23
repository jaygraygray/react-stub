import React from "react";

export const LeftSideBar = (props) => {
  return (
    <div style={props.theme}>
      <div>{props.children}</div>
    </div>
  );
};
