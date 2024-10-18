import React, { useState } from 'react'
import { useTodo } from '../src/context/TodoContexts';



function TodoItem({ todo }) {
         console.log(todo)
         const [isTodoEditable , setIsTodoEditable] = useState(false)
         const [todoMsg , setTodoMsg] = useState(todo.todo)
        const {updateTodo , deleteTodo , togglecomplete }= useTodo()


        const editTodo = () => {
         updateTodo( todo.id , {...todo ,todo:todomsg})
         setIsTodoEditable(false);
        }         
        const toggleCompleted = () =>{
         togglecomplete(todo.id)
        }
        
        console.log(todo)
         return (
                      <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
                 <input
                     type="checkbox"
                     className="cursor-pointer"
                     checked={todo.completed} // cheking  intial value --> false
                     onChange={toggleCompleted} //calling method when checkbox getting check or uncheck
                 />
                 <input  // input for  writing todo
                     type="text"
                     className={`border outline-none w-full bg-transparent  rounded-lg text-black ${
                         isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                     } ${todo.completed ? "line-through" : ""}`}
                     value={todoMsg} // value in the input field 
                     onChange={(e) => setTodoMsg(e.target.value)} // sending new edited todo to todomsg after editing
                     readOnly={!isTodoEditable} //value is true  // if value is false readonly will chnage to editable mode
                 />
                 {/* Edit, Save Button */}
                 <button // button is linked with input field
                     className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                     onClick={() => {
                         if (todo.completed) return; // if value is true then termined this function
     
                         if (isTodoEditable) { // if value is true  then run
                             editTodo(); // it will update todo
                         } 
                         setIsTodoEditable((prev) => !prev); // when we click on button it change to editable and it already editable then change to uneditable
                     }}
                     disabled={todo.completed} // if disable is  true then will not run this function
                     // we cannnot edit  todo if it is completed  
                     >
                          {isTodoEditable ? "📁" : "✏️"}
                 </button>
                 {/* Delete Todo Button */}
                 <button
                     className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                     onClick={() => deleteTodo(todo.id)}
                 >
                     ❌ 
                 </button>
             </div>
         );
     }
     
     export default TodoItem;