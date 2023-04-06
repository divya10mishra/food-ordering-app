import { useParams } from "react-router-dom";
import { addItem, removeItem } from "../utils/Slice/Cart";
import { useDispatch } from "react-redux";
import useRestraunt from "../utils/useRestraunt";
import Shimmer from "./Shimmer";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const RestrauntMenu = () => {
  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

  const params = useParams();
  const { id } = params;
  const restrauntInfo = useRestraunt(id);
  const dispatch = useDispatch();

  const cartItem = useSelector((store) => store.cart.items);
console.log(cartItem,"cartitemm")
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
    <div style={{marginLeft:'15%', marginRight:'15%'}}>
      <div style={{display:'flex', borderBottom:'1px solid rgb(221, 217, 217)', justifyContent:'space-between', marginBottom:'2%'}} >
        {/* <img src={imageUrl + restrauntInfo?.cloudinaryImageId} height="200" style={{borderRadius: '20px', padding:'5px'}}/> */}
        <div
          style={{ display: "flex", flexDirection: "column", padding:'5px'}}
        >
          <span>
            {restrauntInfo?.name}
          </span>
         
          <span>
            Address: {restrauntInfo?.area},{restrauntInfo?.city}
          </span>
       
       
        </div>
        <span className="menu-rating-label">⭐{restrauntInfo?.avgRating} </span>
       
      </div>
      <div>
        🍀Pure Veg
        <div style={{marginTop:'5%'}}>
  <span style={{fontWeight:'bold', fontSize:'20px'}}>Recommended({restrauntInfo?.menu?.items?.length})</span>
         
            {Object.values(restrauntInfo?.menu?.items).map((res) => (
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

                <div >
                  <button
                    style={{backgroundColor:'white'}}
                    onClick={() => handleAddItem(res)}
                  >
                    ➕
                  </button>
                  {cartItem?.quantity}
                  <button
                   
                    style={{ marginLeft: "10px", backgroundColor:'white' }}
                    onClick={() => handleRemoveItem(res)}
                  >
                    ➖
                  </button>
                </div>

              </div>
            ))}
         
        </div>
        {/* <div className="width-cart">
          <Cart />
        </div> */}
      </div>
    </div>
  );
};

export default RestrauntMenu;
