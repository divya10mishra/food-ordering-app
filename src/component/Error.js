import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
    console.log(err,"err")
    return (
      <div>ooppss!!! Error</div>
    );
   }
   
   export default Error