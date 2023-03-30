import {Link} from 'react-router-dom'

const Contact = () => {
    return (<>
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <div className='menu-label' style={{marginTop:'5%', marginLeft:'5%'}}>About</div>
      <div style={{ fontSize:'25px'}}>
        <Link to = '/'> ⬅️Back to Home </Link>
        </div>
        </div>
      <div style={{fontSize:'25px',marginTop:'1%', marginLeft:'5%'}}>This Website is designed and developed by Divya Mishra for learning React and Redux
      
      <br/>The data used to present Home Page of UI is from swiggy's Api, it is used only for learning purpose.
      <br/>Thank You.</div>
      
    </>);
   }
   
   export default Contact