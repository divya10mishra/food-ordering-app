import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Carousel(props) {
    console.log("props carousel", props)
   let width = props?.props?.clientWidth / 2;

  //make it in one function-refactor
  const buttonPrev = () => {
    props.props.scrollLeft -= width;
  };
  const buttonNext = () => {
    props.props.scrollLeft += width;
  };

  return (
    <div>
      <button
        className="rounded-full bg-slate-200 p-2 m-1"
        onClick={buttonPrev}
      >
        <FaArrowLeft />
      </button>
      <button
        className="rounded-full bg-slate-200 p-2 m-1"
        onClick={buttonNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Carousel;
