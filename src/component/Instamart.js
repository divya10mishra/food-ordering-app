// const { default: Accordian } = require("./Accordian")
import {useState} from "react"
import Accordian from './Accordian'

const Instamart = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [visibleSection, setIsVisibleSection] = useState("")
  console.log(isVisible,"isVisible")
  console.log(visibleSection,"visibleSecton")
  return <>
  <h1>Instamart </h1> 
  <Accordian
  title={'Health'}
  description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
  isVisible={visibleSection === "health" }
  setIsVisible={(e)=>{ {setIsVisibleSection("health")}}}
  // checkButton={()=>{console.log()}}
  />
   <Accordian
  title={'DIY techniques'}
  description = {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
  isVisible={visibleSection === "diy"}
  setIsVisible={()=>setIsVisibleSection("diy")}
  />
   <Accordian
  title={'Diet'}
  description = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
  isVisible={visibleSection === "diet"}
  setIsVisible={()=>setIsVisibleSection("diet")}
 />
  </>
}

export default Instamart