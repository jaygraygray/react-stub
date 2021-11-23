import React from "react";

export const Footer = (props) => {
  return (
    <footer style={props.theme}>
      Powered by{" "}
      <a target="_new" href="https://dog.ceo/dog-api/documentation/">
        Dog API.
      </a>
    </footer>
  );
};
