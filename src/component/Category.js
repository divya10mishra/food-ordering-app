import Carousel from './Carousel'

const Category=(()=>{
    let box = document.querySelector('.product-container')
    return(
      
<div className="product-container  overflow-hidden border-b border-solid border-gray-300 mb-6 pb-6 scroll-smooth">
    <div className='flex justify-between'>
    <div className="font-Basis_Grotesque_Pro font-extrabold text-2xl">What's on your mind?</div>
    <Carousel props={box}/>
    </div>
    <div className=" flex justify-around">

         {
            Array(20)
            .fill('')
            .map((i,index)=>{
              return (i= 
                <>
                <div>{index}</div>
               <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png'}
              alt='category'
               height='180' width='144'/>
               </>)
               
            })
        }
       
       
       </div>   
    </div>
   

    )
    

})

export default Category