import { useEffect } from "react";
import ToDoForm from "./to-do-form/to-do-form";

function ToDo() {
  
  useEffect(() => {
  fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(console.log);
  }, []);
  return (
    <div className="to-do">
      <h2>To-Do List Simple Use State</h2>
      <ToDoForm/>
    </div>
  );
}   
export default ToDo;