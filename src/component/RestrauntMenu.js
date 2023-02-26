import { useParams } from 'react-router-dom'
import { addItem, removeItem } from '../utils/Slice/Cart'
import { useDispatch } from 'react-redux'
import useRestraunt from '../utils/useRestraunt'
import Shimmer from './Shimmer'


const RestrauntMenu = () => {
    
    let imageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'


    
    const params = useParams()
    const { id } = params
    console.log(params,"params")
    const restrauntInfo = useRestraunt(id)
    const dispatch = useDispatch()

    handleAddItem = ((item)=>{
        dispatch(addItem(item))   // action is {payload:'stems'}
    })

    handleRemoveItem = ((item)=>{
        dispatch(removeItem(item))
    })
    

     return (!restrauntInfo) ? (<Shimmer />) : ( <div style={{display: 'flex'}}>
  <div style={{ padding:'15px'}}>
      <h3>Restraunt Id : {id}</h3>
  <h2>{restrauntInfo?.name}</h2>
  <h3>{restrauntInfo?.avgRating} ratings</h3>
  <h3>Address: {restrauntInfo?.area},{restrauntInfo?.city}</h3>
  <img src =  {imageUrl + restrauntInfo?.cloudinaryImageId}/>
  </div>
  <div>
      <h1>Menu</h1>
      <ul>
  {Object.values(restrauntInfo?.menu?.items).map((res)=>(
      <>
   <li key={res.id}>
        {res.name} 
    </li>
   <button onClick = {()=>handleAddItem(res)}>+</button>
   <button onClick = {()=>handleRemoveItem(res)}>-</button>
   </>
  ))} 
  </ul>
  </div>
  </div>)
}

export default RestrauntMenu;