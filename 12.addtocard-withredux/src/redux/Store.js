import {configureStore} from "@reduxjs/toolkit"

import Reducer from "./slices/cartSlice"

export const store = configureStore({
    reducer:{
        cart1:Reducer // cart1 we can hold in varible by craeteSelector and then access his values 
    },
    devTools : true
})