import React from 'react';
import React, { useState } from "react";

function Search() {
    const [searchInput, setSearchInput] = useState("");
  return (
    <div className="search-box">
          <input
            style={{
              borderRadius: "5px",
              padding: "10px",
              border: "1px solid grey",
              width: "80%",
              margin: "22px",
            }}
            type={"text"}
            placeholder={"Search for Restraunts and Food"}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            style={{
              borderRadius: "5px",
              padding: "10px",
              marginLeft: "10px",
              border: "1px solid grey",
            }}
            onClick={() => {
              const data = filterData(searchInput, allRestraunts);
              setFillteredRestraunts(data);
            }}
          >
            Search
          </button>
        </div>
  )
}

export default Search