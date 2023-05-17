import RestrauntCard from "./RestrauntCard";
import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom'
import {filterData} from '../utils/helper'
import useOnline from '../utils/useOnline'

const Body = () => {
  

  const [searchInput, setSearchInput] = useState("");
  const [fillteredRestraunts, setFillteredRestraunts] = useState([]);
  const [allRestraunts, setAllRestraunts] = useState([]);

  useEffect(() => {
    getRestrauntsData();
  }, []);

  

  async function getRestrauntsData() {
    const fetchData = await fetch(
      // https://web-production-81f2.up.railway.app/
      "https://web-production-81f2.up.railway.app/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2144806&lng=81.25281389999999&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await fetchData.json();
    
    setAllRestraunts(data?.data?.cards[2]?.data?.data?.cards);
    setFillteredRestraunts(data?.data?.cards[2]?.data?.data?.cards);
  }
  
  const isOnline = useOnline()

  if(!isOnline){
      return (<h1>Offline, Check your internet connection!</h1>)
  }
  
  return (
   <>
    <div className="cover">
      <div className="search-box">
        <input 
          style={{
            borderRadius: "5px",
            padding: "10px",
            border: "1px solid grey",
            width: '80%',
            margin: '22px'
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
      {allRestraunts?.length === undefined ?<span className='undefined-style'>Restraunts are close visit between 9a.m to 11p.m IST </span> : ''}
        {allRestraunts?.length === 0 ? (<>
           <Shimmer />
        
       </> ) : (
          <>
          
            {fillteredRestraunts?.map((restraunt, index) => {
              return (
                
                
                <Link
                  to={"/restraunt/" + restraunt.data.id}
                  key={restraunt.data.id}
                >
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
