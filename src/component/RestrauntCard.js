import { useContext } from "react";
import userContext from "../utils/useContext";

const RestrauntCard = (props) => {
  let imageUrl =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
  const { user, setUser } = useContext(userContext);
  console.log("props",props)
  return (
    <>
      <div className="card">
        <img
          src={imageUrl + props.imgUrl}
          alt="picture missing!!"
        />
        <div className="remove-link-style" style={{ color: "black" }}>
          {props.restrauntName}
        </div>
        <div style={{ fontSize: "12px", color: "grey" }}>
          {props.cuisines.map((item) => (
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
          <div className="card-rating-label">⭐{props.avgRating} </div>
          <div
            style={{
              color: "black",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            {props.cost}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestrauntCard;
