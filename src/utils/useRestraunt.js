
import { useState, useEffect } from 'react'

const useRestraunt = (id) =>{

    const [restrauntInfo, setRestrauntInfo] = useState(null)
    useEffect(()=>{
        getRestrauntInfo()
       },[])
   
   async function getRestrauntInfo() {
       try{
        //const fetchData = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=26.2144806&lng=81.25281389999999&menuId=" + id);
        const fetchData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2144806&lng=81.25281389999999&restaurantId=" + id)
        const data = await fetchData.json()
        //console.log(data.data.name,"info")
        const restraunt = data?.data?.cards[0]?.card?.card?.info
        console.log(restraunt,"rest")
        setRestrauntInfo(restraunt)
       }
       catch(err){
       console.error(err)
       }
      
   }
   return restrauntInfo
}

export default useRestraunt