import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Carousel(props) {
    console.log(props
        ,"props carousel")

    const buttonPrev = () =>{
       let width = props.props.clientWidth
       props.props.scrollLeft = props.props.scrollLeft - width
       console.log(width,"left")
    }

    const buttonNext = () =>{
        let width = props.props.clientWidth
       props.props.scrollRight = props.props.scrollRight + width
       console.log(width,"right")
    }


  return (
    <div>
        <button className='rounded-full bg-slate-200 p-2 m-1' onClick={buttonPrev}><FaArrowLeft /></button>
        <button className='rounded-full bg-slate-200 p-2 m-1' onClick={buttonNext}><FaArrowRight/></button>
    </div>
  )
}

export default Carousel