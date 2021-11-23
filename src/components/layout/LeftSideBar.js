import React from "react";

export const LeftSideBar = (props) => {
  return (
    <div style={props.theme}>
      <div>
        <h2>Stuff To Do Here</h2>
        <input placeholder="Search for a dog breed..." />
        <button>Random Pupp!</button>
      </div>
    </div>
  );
};
