const CartItem = (props) => {
    let imageUrl = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'

    let Itemtotal = () =>{
        return ((props.quantity/100) * props.price)
    }

    return (
        <>
      <div  style={{flexDirection:'column', background:'white', borderBottom:'2px solid gray'}}>
         <div style={{ fontSize: "20px", fontWeight: "900" }}>{props?.name}</div>
        <span style={{ fontSize: "18px", fontWeight: "500" }}>Quantity-{props?.quantity} </span>
        <span style={{ fontSize: "18px", fontWeight: "500" }}>Rupees-{props?.price/100}</span>
        <span style={{ fontSize: "18px", fontWeight: "500" }}>Total- {Itemtotal()}</span>
     </div>
     
        </>
    )
}

export default CartItem