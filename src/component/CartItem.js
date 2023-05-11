import { useDispatch } from "react-redux";
import { clearItem } from "../utils/Slice/Cart";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const handleClearItem = () => {
    dispatch(clearItem(props));
  };

  let Itemtotal = () => {
    return (props.quantity / 100) * props.price;
  };

  return (
    <>
      <div
        style={{
          flexDirection: "column",
          background: "white",
          borderBottom: "2px solid gray",
        }}
      >
        <div style={{ fontSize: "20px", fontWeight: "900" }}>{props?.name}</div>
        <span style={{ fontSize: "18px", fontWeight: "500" }}>
          Quantity-{props?.quantity}{" "}
        </span>
        {/* <span style={{ fontSize: "18px", fontWeight: "500" }}>Rupees-{props?.price/100}</span> */}
        <span
          style={{ fontSize: "18px", fontWeight: "500", marginLeft: "60%" }}
        >
          Total- {Itemtotal()}
        </span>
        <span
          style={{ marginLeft: "5%", cursor: "pointer" }}
          onClick={() => {
            handleClearItem();
          }}
        >
          ❌
        </span>
      </div>
    </>
  );
};

export default CartItem;
