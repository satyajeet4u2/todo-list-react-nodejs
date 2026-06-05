import { useState } from "react";
import "./to-do-form.css";


function ToDoForm() {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");   
    const [todos, setTodos] = useState([]);

    const handleAddTask = () => {
        if (task.trim() === "") return; 
  return (
    <div>
      <h2>To-Do Form</h2>
      <input 
        type="text" 
        placeholder="Enter a new task" 
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Enter a description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Enter a Category" 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}
export default ToDoForm;