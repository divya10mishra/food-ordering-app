const Accordian = ({description, title, isVisible, setIsVisible}) => {

return <>

<div className='accordian-style'>
<div style={{fontWeight:'bold',fontSize:'24px'}}>{title}</div>
{isVisible && <div>{description}</div>}
{isVisible ? <button onClick={()=>{setIsVisible(false)}}>hide</button>:
<button onClick={()=>{{setIsVisible(true)}{checkButton("show")}}}>show</button>}
</div>

</>
}

export default Accordian