import {useState, useEffect} from 'react'

const useOnline = () => {
const [isOnline, setIsOnline] = useState(true)

useEffect(() => {

    const handleOnline = () =>{ setIsOnline(true)}
    const handleOffline = () =>{ setIsOnline(true)}

    window.addEventListener('online',()=>handleOnline)
    window.addEventListener('offline',()=>handleOffline)
   

    return(()=>{
        window.removeEventListener('online',handleOnline)
        window.removeEventListener('offline',handleOffline)
    })
}, [])
console.log(isOnline,"isOnline")
return isOnline

}

export default useOnline