import { createSlice } from "@reduxjs/toolkit"


const Cart = createSlice({
    name : 'cart',
    initialState : {
        items:[]
    },
//it is covention: reducers
    reducers : {

        //action is {payload:'stems'}
        addItem: (state, action) => {
          state.items.push(action.payload) // payload is stems
        },
        removeItem: (state, action) => {
          state.items.pop(action.payload)
       
         //state.items(action.payload)
        },
        clearCart: (state) => {
          state.items=[]
        }
    }
})

export const { addItem, removeItem,clearCart } = Cart.actions

// it is reducer
export default Cart.reducer