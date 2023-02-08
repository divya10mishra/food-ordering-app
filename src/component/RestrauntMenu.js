import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

const RestrauntMenu = () => {
    const [restrauntInfo, setRestrauntInfo] = useState(null)
    let imageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    useEffect(()=>{
     getRestrauntInfo()
    },[])

async function getRestrauntInfo() {
    const fetchData = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=26.2144806&lng=81.25281389999999&menuId=" + id);
    const data = await fetchData.json()
    console.log(data.data.name,"info")
    const restraunt = data?.data
    setRestrauntInfo(restraunt)
}
// const menuList = restrauntInfo?.menu?.items
// console.log(Object.values(menuList),"menu")
    const params = useParams()
    const { id } = params
    console.log(params,"params")

     return !restrauntInfo ? (<Shimmer />) : ( <div style={{display: 'flex'}}>
  <div style={{ padding:'15px'}}>
      <h3>Restraunt Id : {id}</h3>
  <h2>{restrauntInfo.name}</h2>
  <h3>{restrauntInfo.avgRating} ratings</h3>
  <h3>Address: {restrauntInfo.area},{restrauntInfo.city}</h3>
  <img src =  {imageUrl + restrauntInfo.cloudinaryImageId}/>
  </div>
  <div>
      <h1>Menu</h1>
      <ul>
  {Object.values(restrauntInfo?.menu?.items).map((res)=>{
   <li key={res.id}>
       {res.name}
    </li>
   
  })}
  </ul>
  </div>
  </div>)
}

export default RestrauntMenu;