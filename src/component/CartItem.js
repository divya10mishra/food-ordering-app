//import { useParams } from 'react-router-dom'


const CartItem = (props) => {
    let imageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    // const params = useParams()
    // const { id } = params
    // console.log(params,"params")
    // const restrauntInfo = useRestraunt(id)
    console.log(props,"cartitem")
    return (
        <>
      <div className="card">
         <img src = {imageUrl + props?.cloudinaryImageId} alt="food" />
         <div>{props?.name}</div>
        <div>{props?.description}</div>
        <div>{props?.category}</div>
        <span>Rupees-{props?.price/100}</span>
     </div>
        </>
    )
}

export default CartItem