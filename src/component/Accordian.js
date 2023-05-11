

const Accordian = ({ description, title, isVisible, setIsVisible, name }) => {

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
         
          }}
          name={isVisible ? "" : name}
          style={{
            height:"30px"
          }}
        >
          {isVisible ?  "⬆️" : "⬇️"}
        </button>
      </div>
    </>
  );
};

export default Accordian;
