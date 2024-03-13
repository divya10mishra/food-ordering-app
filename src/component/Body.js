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
        <div className="w-4/5 product-container border-b border-solid border-gray-300 mb-6 py-6 ">
          <div className="flex justify-between">
          <div className="font-Basis_Grotesque_Pro font-extrabold text-2xl ">
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

      <div className="left-margin-body py-6">
      <div className="font-Basis_Grotesque_Pro font-extrabold text-2xl ">
      Restaurants with online food delivery in Lucknow
          </div>
        <div className="product-container flex-wrap flex mb-6 ">
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
                  <div className="flex justify-between">
                  <Link to={"/restraunt/" + restraunt.id} key={restraunt.id}>
                    <RestrauntCard {...restraunt} key={index} />
                  </Link>
                  </div>
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
