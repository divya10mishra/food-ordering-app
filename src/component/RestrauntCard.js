import { useContext } from "react";
import userContext from "../utils/useContext";

const RestrauntCard = (props) => {
  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  const { user, setUser } = useContext(userContext);
  return (
    <>
      <div className="card">
        <img
          src={imageUrl + props.data.cloudinaryImageId}
          alt="picture missing!!"
        />
        <div className="remove-link-style" style={{ color: "black" }}>
          {props.data.name}
        </div>
        <div style={{ fontSize: "12px", color: "grey" }}>
          {props.data.cuisines.map((item) => (
            <>{item},</>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div className="card-rating-label">⭐{props.data.avgRating} </div>
          <div
            style={{
              color: "black",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            {props.data.costForTwoString}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestrauntCard;
