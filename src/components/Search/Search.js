import React, { useEffect, useState } from "react";
import { getAllPups } from "../../api/config";

export const Search = () => {
  const [pups, setPups] = useState([]);

  const handleGetAllPups = () => getAllPups({ cb: setPups });

  console.log(">> pups", pups);
  return (
    <input
      placeholder="Search for a dog breed..."
      onMouseOver={handleGetAllPups}
    />
  );
};
