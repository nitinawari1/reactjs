import { useContext , createContext } from "react";


export const TodoContext = createContext({
         todos:[
                  {
                      id:"1",
                      todo:"todo by user ",
                      completed:false
                  }
         ],
         addTodo : (todo) =>{} ,
         updateTodo : (todo , id ) =>{} ,
         deleteTodo : (id) =>{} ,   
         togglecomplete : (id) =>{},   


});

export  const TodoProvider = TodoContext.Provider

export const useTodo = () =>{
         return useContext(TodoContext)
}