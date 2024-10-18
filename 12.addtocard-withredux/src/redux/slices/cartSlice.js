import { createSlice , createSelector } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cart", // this is not a name for selecting
    initialState: [],
    reducers:{
        addItem:(state , action)=>{
            state.push(action.payload)
        },
    },
});


export const getItemsSelector = createSelector(
    (state)=>state.cart1 ,
    (state) =>state
)

export const { addItem } = cartSlice.actions ; 

export default cartSlice.reducer;