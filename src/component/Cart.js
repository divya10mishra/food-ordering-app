import CartItem from './CartItem'
import {useSelector, useDispatch} from 'react-redux'
import {clearCart} from '../utils/Slice/Cart'

const Cart = () =>{

    const cartItem = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleRemoveItem = () =>{
        dispatch(clearCart())
    }

    return (
        <>
        <h2>Total items in cart - {cartItem.length}</h2>

        <span style={{display:'flex', flexDirection:'row'}}>{cartItem.map((item)=>(<CartItem key = {item.id} {...item}/>))}</span>

        <button onClick={()=>{handleRemoveItem()}}>Remove</button>
        
        </>
    )
}

export default Cart