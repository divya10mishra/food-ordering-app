import { useContext } from "react";
import userContext from "../utils/useContext";

const RestrauntCard = (props) => {
  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  const { user, setUser } = useContext(userContext);
  console.log(props, "cards inside");
  return (
    <>
      <div className="card">
        <img src={imageUrl + props.data.cloudinaryImageId} alt="food" />
        <div className="remove-link-style" style={{ color: "black" }}>
          {props.data.name}
        </div>
        <div className="card-rating-label">{props.data.avgRating} stars </div>
        <div style={{ color: "black" }}> {props.data.costForTwoString}</div>
        {/* <span>{user.name}</span> */}
      </div>
    </>
  );
};

export default RestrauntCard;
