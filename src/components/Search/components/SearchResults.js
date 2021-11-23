import React from "react";

export const SearchResults = (props) => {
  const { children, searchValue, display } = props;
  return searchValue && display && children ? (
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
