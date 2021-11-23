import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { SearchResults } from "./components";
import { getAllPups } from "../../api/config";

export const Search = () => {
  const [pups, setPups] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [focus, setFocus] = useState(false);

  const handleGetAllPups = () => getAllPups({ cb: setPups });

  const handleSearchForPup = React.useCallback(
    (e) => {
      if (e.target && e.target.value.length >= 2 && pups.length !== 0) {
        setSearchValue(e.target.value);
      }
    },
    [pups]
  );

  useEffect(() => {
    if (!focus) {
      setSearchValue("");
    }
  }, [focus, handleSearchForPup]);

  return (
    <div className="container">
      <input
        placeholder="Search for a dog breed..."
        onClick={handleGetAllPups}
        onChange={handleSearchForPup}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className="results-positioner">
        <SearchResults searchValue={searchValue} display={focus}>
          {pups}
        </SearchResults>
      </div>
    </div>
  );
};
