import { useParams } from "react-router-dom";
import { addItem, removeItem } from "../utils/Slice/Cart";
import { useDispatch } from "react-redux";
import useRestraunt from "../utils/useRestraunt";
import Shimmer from "./Shimmer";
import Cart from "./Cart";

const RestrauntMenu = () => {
  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  const params = useParams();
  const { id } = params;
  const restrauntInfo = useRestraunt(id);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // action is {payload:'stems'}
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
        <img src={imageUrl + restrauntInfo?.cloudinaryImageId} />
        console.log(restrauntInfo,"restrauntInfo")
  return !restrauntInfo ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu-card">
        <img src={imageUrl + restrauntInfo?.cloudinaryImageId} />
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: "3%" }}
        >
          <span className="menu-label">
            {restrauntInfo?.name}({id})
          </span>
          <span className="menu-label">
            Ratings : {restrauntInfo?.avgRating}
          </span>
          <span className="menu-label">
            Address: {restrauntInfo?.area},{restrauntInfo?.city}
          </span>
         
       
        </div>
      </div>
      <div style={{ display: "flex", justifyContent:'space-between', marginRight:'25%' }}>
        <div>
          <ul>
            {Object.values(restrauntInfo?.menu?.items).map((res) => (
              <div className="menu-item-card" key={res.id} style={{width:'100%'}}>
               
                <span className="menu-item-list">
                  <span>{res.name} </span>
                  <span style={{ fontSize: "15px", fontWeight: "500" }}>
                    Price:{res.price / 100}
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "500" }}>
                    Category:{res.category}
                  </span>
                </span>

                <div className="menu-item-card">
                  <button
                    className="button-style"
                    onClick={() => handleAddItem(res)}
                  >
                    +
                  </button>
                  <button
                    className="button-style"
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleRemoveItem(res)}
                  >
                    -
                  </button>
                </div>

              </div>
            ))}
          </ul>
        </div>
        <div    >
          <Cart />
        </div>
      </div>
    </>
  );
};

export default RestrauntMenu;
