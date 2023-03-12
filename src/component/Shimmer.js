const Shimmer = () => {
 return (
   <div className='shimmer-container'>
     {/* {Array(10)
       .fill("")
       .map((e, index) => { */}
         <div className="shimmer-card"></div>

         {Array(10).fill("").map(e=>e=<div className="shimmer-card"></div>)}
    
   </div>
 );
}

export default Shimmer