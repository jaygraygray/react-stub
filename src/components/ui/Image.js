import React from "react";

const Image = (props) => {
  const { src } = props;
  return src ? <img src={src} alt="SOME DOG" /> : "Loading...";
};

export default Image;
