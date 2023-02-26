import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slice/Cart'

const store = configureStore ({
    reducer : {
       cart: cartSlice,  
    }
})


export default store