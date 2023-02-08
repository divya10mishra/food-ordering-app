import RestrauntCard from "./RestrauntCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'

const Body = () => {
  // const RestrauntList = [{
  //     name : "Burger King",
  //     image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zfg3qwadnsmfoearpew7",
  //     cuisine : ["Burger", "American"],
  //     rating : "4.2"
  // },
  // {
  //     name : "KFC",
  //     image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/b1b4e225722fb0501852f3ad0e0cd376",
  //     cuisine : ["Burger", "Pizza"],
  //     rating : "4"
  // }]

  const [searchInput, setSearchInput] = useState("");
  const [fillteredRestraunts, setFillteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestraunts] = useState([]);

  useEffect(() => {
    getRestrauntsData();
  }, []);

  async function getRestrauntsData() {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2144806&lng=81.25281389999999&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await fetchData.json();
    console.log(data.data.cards, "data");
    setAllRestraunts(data?.data?.cards[1]?.data?.data?.cards);
    setFillteredRestraunts(data?.data?.cards[1]?.data?.data?.cards);
  }

  const filterData = (searchInput, restraunts) => {
    return restraunts.filter((res) => {
        console.log(res,"res")
       return res?.data?.name?.toLowerCase().includes(searchInput.toLowerCase());
    });
  };
  //early return
//   if (!allRestraunts?.length === 0) return null;
//   if (fillteredRestraunts?.length === 0) return <h1>No Restraunts found</h1>;
  console.log(fillteredRestraunts, "restraunts");
  return (
    <>
      <div className="search-box">
        <input
          className="search-input"
          type={"text"}
          placeholder={"Enter restraunt"}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, allRestraunts);
            setFillteredRestraunts(data);
          }}
          
        >
          Search
        </button>
        
        {/* <button
          onClick={() => {
            const data = allRestraunts
            setAllRestraunts(data);
          }}
          
        >
          Refresh
        </button> */}
      </div>
      <div className="restraunt-list">
        {allRestraunts?.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            {fillteredRestraunts?.map((restraunt, index) => {
              return <Link 
              to = {"/restraunt/" + restraunt.data.id}
              key = {restraunt.data.id}>
              <RestrauntCard {...restraunt} key={index} />
              </Link>
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Body;
