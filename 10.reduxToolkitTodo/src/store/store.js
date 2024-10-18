// first approch
import {configureStore} from "@reduxjs/toolkit"
import  todoReducer  from "../store/todoslice"
export const store = configureStore({
    reducer:{
        Todo:todoReducer, // By this approche we can give a multiple reducers and can access value like this state.todo.todos 
    }
})

// second apporach

import {configureStore} from '  @reduxjs/toolkit';
import todoReducer from '../store/todoslice';

export const store = configureStore({
    reducer: todoReducer //by this method we can only use one reducer and can access value directly like state.todos
})