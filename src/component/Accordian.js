import uparrow from '../asset/up-arrow.png'
import downarrow from '../asset/down-arrow.png'

const Accordian = ({ description, title, isVisible, setIsVisible, name }) => {
 //console.log(isVisible, "accordianisVisible");
  return (
    <>
      <div className="menu-item-card">
        <span>
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>{title}</div>
        {isVisible && <div style={{fontWeight:'500'}}>{description}</div>}
      </span>
        <button
          onClick={(e) => {
            setIsVisible(e.target.name);
            //console.log(e,"clickk")
          }}
          name={isVisible ? "" : name}
          style={{
            borderRadius: "5px",
            padding: "10px",
            marginLeft: "10px",
            border: "1px solid grey",
            height:"50px"
          }}
        >
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default Accordian;
