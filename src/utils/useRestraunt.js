
import { useState, useEffect } from 'react'

const useRestraunt = (id) =>{

    const [restrauntInfo, setRestrauntInfo] = useState(null)
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
   return restrauntInfo
}

export default useRestraunt