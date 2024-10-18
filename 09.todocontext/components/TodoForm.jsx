import React, { useState } from "react";
import { useTodo } from "../src/context/TodoContexts";

function TodoForm() {
    const [todo , setTodo] =useState("")

    const {addTodo} =  useTodo()

   const  add  = (e) =>{
         e.preventDefault();

         if (!todo) return

        // addTodo({id:Date.now() , todo:todo , completed:false})  // we can pass todo like that  but we can give this properties in the method where we define 
         //todo:todo --> if the field name and values name are same then we can write directly like this todo

         addTodo({todo , completed:false})
         setTodo("")
    }

         return (
             <form onSubmit={add} className="flex">
                 <input
                     type="text"
                     placeholder="Write Todo..."
                     className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-black/20 py-1.5 text-black "
                     style={{ color: 'black' }} 
                     value={todo}
                     onChange={(e)=>setTodo(e.target.value)}
                     

                 />
                 <button type="submit"  className="rounded-r-lg px-3 py-1  bg-green-600 text-white shrink-0">
                     Add
                 </button>
             </form>
         );
     }
     
     export default TodoForm;