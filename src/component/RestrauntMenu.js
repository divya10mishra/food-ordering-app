import { useState } from "react";
import { useParams } from "react-router-dom";
import { addItem, removeItem } from "../utils/Slice/Cart";
import { useDispatch } from "react-redux";
import useRestraunt from "../utils/useRestraunt";
import Shimmer from "./Shimmer";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const RestrauntMenu = () => {
  const [buttons, showButtons] = useState(false);
  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  const params = useParams();
  const { id } = params;
  const restrauntInfo = useRestraunt(id);
  const dispatch = useDispatch();

  const cartItem = useSelector((store) => store.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // action is {payload:'stems'}
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return !restrauntInfo ? (
    <Shimmer />
  ) : (
    <div style={{ marginLeft: "15%", marginRight: "15%" }}>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgb(221, 217, 217)",
          justifyContent: "space-between",
          marginBottom: "2%",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", padding: "5px" }}
        >
          <span>{restrauntInfo?.name}</span>

          <span>
            Address: {restrauntInfo?.area},{restrauntInfo?.city}
          </span>
        </div>
        <span className="menu-rating-label">⭐{restrauntInfo?.avgRating} </span>
      </div>
      <div>
        🍀Pure Veg
        <div style={{ marginTop: "5%" }}>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Recommended({restrauntInfo?.menu?.items?.length})
          </span>

          {Object.values(restrauntInfo?.menu?.items).map((res, index) => (
            <div className="menu-item-card" key={res.id}>
              
              <span className="menu-item-list">
                <span>{res.name} </span>
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  Price:{res.price / 100}
                </span>
                <span style={{ fontSize: "15px", fontWeight: "500" }}>
                  Category:{res.category}
                </span>
              </span>

              {buttons && cartItem[index]?.quantity ? (
                <div className='add-sub-item'>
                  <div
                    style={{ backgroundColor: "white" }}
                    onClick={() => handleAddItem(res)}
                  >
                    ➕
                  </div>
                {cartItem[index]?.quantity}
                  <div
                    style={{ marginLeft: "10px", backgroundColor: "white" }}
                    onClick={() => handleRemoveItem(res)}
                  >
                    ➖
                  </div>
                </div>
              ) : (
                <div
                  className="add-label"
                  onClick={() => {
                    showButtons(true);
                    handleAddItem(res);
                  }}
                >
                  Add
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
