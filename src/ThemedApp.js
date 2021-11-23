import React from "react";
import App from "./App";

const padding = {
  header: "",
  leftSideBar: "1.5rem",
  rightSideBar: "1rem",
  footer: "2rem",
};

const colors = {
  color: {},
  background: {
    header: "lightpink",
    leftSideBar: "lightblue",
    rightSideBar: "yellow",
    footer: "wheat",
    main: "coral",
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
  leftSideBar: {
    display: "flex",
    gridColumn: "1 / 2",
    background: colors.background.leftSideBar,
    minWidth: "200px",
    padding: padding.rightSideBar,
  },
  main: {
    gridColumn: "2 / 3",
    background: colors.background.main,
  },
  rightSideBar: {
    gridColumn: "3 / 4",
    background: colors.background.rightSideBar,
    padding: padding.rightSideBar,
  },
  footer: {
    gridColumn: "1 / 4",
    textAlign: "center",
    background: colors.background.footer,
    padding: padding.footer,
  },
};

const WithTheme = (props) => {
  return <App theme={theme} {...props} />;
};

export default WithTheme;
