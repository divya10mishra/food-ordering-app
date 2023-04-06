const CartItem = (props) => {
    
 

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
      </div>
    </>
  );
};

export default CartItem;
