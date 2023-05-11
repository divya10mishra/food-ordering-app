import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/Slice/Cart";
import order from "../asset/order.gif";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(clearCart());
  };

  //add price of all elements of array
  let cartTotal = cartItem.reduce(
    (acc, current) => (acc = acc + current.quantity * (current.price / 100)),
    0
  );

  return (
    <>
      {cartItem?.length <= 0 ? (
        <div
          style={{ marginTop: "10%", borderRadius: "10px", marginLeft: "40%" }}
        >
          <img src={order} width="300" /> <br />
          <Link to="/">
            <button
              className="login-button"
              style={{ width: "27%", cursor: "pointer" }}
            >
              Search for restraunts
            </button>
          </Link>
        </div>
      ) : (
        <div
          className="cart-style"
          style={{ flexDirection: "column", marginTop: "5%" }}
        >
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
              marginTop: "3%",
            }}
          >
            <button
              style={{
                borderRadius: "5px",
                height: "1%",
                border: "1px solid grey",
                padding: "1.3%",
              }}
              onClick={() => {
                handleRemoveItem();
              }}
            >
              Clear cart
            </button>

            {cartTotal > 0 && (
              <div className="total-label">Cart Total-{cartTotal}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
