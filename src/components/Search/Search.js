import React, { useRef, useState, useEffect } from "react";
import { getAllPups } from "../../api/config";

export const Search = () => {
  const [pups, setPups] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);

  const handleGetAllPups = () => getAllPups({ cb: setPups });

  const handleSearchForPup = React.useCallback(
    (e) => {
      if (e.target && e.target.value.length >= 3 && pups.length !== 0) {
        setSearchValue(e.target.value);
      }
    },
    [pups]
  );

  useEffect(() => {
    if (!focus) {
      handleSearchForPup("");
    }
  }, [focus, handleSearchForPup]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <input
        placeholder="Search for a dog breed..."
        onClick={handleGetAllPups}
        onChange={handleSearchForPup}
        ref={inputRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div
        style={{
          position: "absolute",
          top: 25,
          left: 10,
        }}
      >
        <SearchResults searchValue={searchValue} display={focus}>
          {pups}
        </SearchResults>
      </div>
    </div>
  );
};

const SearchResults = (props) => {
  const { children, searchValue, display } = props;
  return display && children ? (
    <div
      style={{
        maxHeight: "150px",
        overflowY: "auto",
        background: "white",
      }}
    >
      {children.map((i) =>
        i.includes(searchValue) ? <SearchItem>{i}</SearchItem> : null
      )}
    </div>
  ) : null;
};

const SearchItem = (props) => {
  const { children } = props;
  return <div>{children}</div>;
};
