import { createSlice } from "@reduxjs/toolkit"


function cartPayload(item){
  return {
    id : item.id,
    name : item.name,
    price : item.price,
    quantity : 1
  }
}

const Cart = createSlice({
  name: "cart",
  initialState: {
    items: [],

  },
  //it is covention: reducers
  reducers: {
    //action is {payload:'stems'}
    addItem: (state, action) => {
    
       let cartz = cartPayload(action.payload)

       let check = state.items.findIndex(el => el.id === cartz.id)
        
       if(check==-1){
         state.items.push(cartz)
       }
       else{
         state.items[check].quantity++
       }
    
    },
    removeItem: (state, action) => {
      let cartz = cartPayload(action.payload)

      let check = state.items.findIndex(el => el.id === cartz.id)
       
      if(check>-1){
        if(state.items[check].quantity>0){
          state.items[check].quantity--
        }
        else{
          state.items.splice(0,1)
        }
        
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    clearItem :(state, action)=>{
      let cartz = cartPayload(action.payload)
      let check = state.items.findIndex(el => el.id === cartz.id)
      console.log(check,"check")
      if(state.items[check]?.id){
        state.items.splice(check,1)
      }
    }
  },
});

export const { addItem, removeItem,clearCart, clearItem } = Cart.actions

// it is reducer
export default Cart.reducer