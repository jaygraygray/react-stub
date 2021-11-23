import React from "react";
import App from "./App";

const colors = {
  color: {},
  background: {
    header: "lightpink",
    leftContent: "",
    rightContent: "",
    footer: "",
  },
};

const theme = {
  app: {
    display: "grid",
    height: "100vh",
    gridTemplate: "auto 1fr auto / auto 1fr auto",
  },
  header: {
    background: colors.background.header,
    padding: "1rem",
    gridColumn: "1 / 4",
  },
  leftSideBar: {},
  main: {},
  rightSideBar: {},
  footer: {},
};

const WithTheme = (props) => {
  return <App theme={theme} {...props} />;
};

export default WithTheme;
