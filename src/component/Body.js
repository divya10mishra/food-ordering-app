import RestrauntCard from "./RestrauntCard";
import Category from "./Category";
import Carousel from "./Carousel";
import React, { useState, useEffect,useRef } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { RestrauntCardData } from "../utils/RestrauntCardData";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [fillteredRestraunts, setFillteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestraunts] = useState([]);

  useEffect(() => {
    getRestrauntsData();
  }, []);

  async function getRestrauntsData() {
    // const fetchData = await fetch(
    //   // https://web-production-81f2.up.railway.app/
    //   "https://web-production-81f2.up.railway.app/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2144806&lng=81.25281389999999&page_type=DESKTOP_WEB_LISTING"
    // );
    // const data = await fetchData.json();

    setAllRestraunts(RestrauntCardData?.data?.cards);
    setFillteredRestraunts(RestrauntCardData?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, Check your internet connection!</h1>;
  }
  let cardRef = useRef(null);
  const box = cardRef.current;
  
  return (
    <>
      <div className=" flex justify-center ">
        <Category />
      </div>
      <div className=" flex justify-center">
        <div className="w-4/5 product-container">
          <div className="flex justify-between">
          <div className="font-Basis_Grotesque_Pro font-extrabold text-2xl">
            Top Restaurants Chains in Lucknow
          </div>
          <div><Carousel props={box}/></div>
          </div>
          <div className="flex justify-around overflow-hidden scroll-smooth" ref={cardRef}>
            {fillteredRestraunts?.map((restraunt, index) => {
              return (
                <Link to={"/restraunt/" + restraunt.id} key={restraunt.id}>
                  <RestrauntCard {...restraunt} key={index} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="cover">
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
        <div className="restraunt-list">
          {allRestraunts?.length === undefined ? (
            <span className="undefined-style">
              Restraunts are close visit between 9a.m to 11p.m IST{" "}
            </span>
          ) : (
            ""
          )}
          {allRestraunts?.length === 0 ? (
            <>
              <Shimmer />
            </>
          ) : (
            <>
              {fillteredRestraunts?.map((restraunt, index) => {
                return (
                  <Link to={"/restraunt/" + restraunt.id} key={restraunt.id}>
                    <RestrauntCard {...restraunt} key={index} />
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Body;
