import React from "react";

const SearchBox = ({ handleSearch }) => {

  return (
    <div className="pa2">
      <input 
        onChange={handleSearch}
        className="pa3 ba b--pink bg-light-pink"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
