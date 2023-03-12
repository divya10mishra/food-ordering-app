import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/Slice/Cart";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(clearCart());
  };
  

  let cartTotal = cartItem.reduce((acc, current)=>
      acc=acc+(current.quantity*(current.price/100))  
  ,0)

  return (
      <>
    {  cartItem?.length > 0 && <div className='header' style={{flexDirection:'column', width:'100%'}}>
       <h2>Cart</h2>

      <span>
        {cartItem.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop:'3%'
        }}
      >
       
          <button
          style={{
            borderRadius: "5px",
            padding: "10px",
            marginLeft: "10px",
            border: "1px solid grey",
           
          }}
            onClick={() => {
              handleRemoveItem();
            }}
          >
           Clear cart
          </button>
        
        {cartTotal>0 && <div className='total-label'>Cart Total-{cartTotal}</div>}
      </div>
    </div>}
  </>);
};

export default Cart;
