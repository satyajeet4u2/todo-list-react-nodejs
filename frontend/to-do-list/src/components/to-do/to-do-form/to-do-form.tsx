import { useState } from "react";
import "./to-do-form.css";
import ToDoList from "../to-do-list/to-do-list";


function ToDoForm() {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");   
    const [todos, setTodos] = useState<Array<{ task: string; description: string; category: string }>>([]);

    const handleAddTask = () => {
        // if (task.trim() === "") return; 
        setTodos([...todos, { task, description, category }]);
         console.log("Current To-Dos:", todos);
        setTask("");
        setDescription("");
        setCategory("");
       
    };

  const handleEdit = (
    index: number,
    updatedTask: { task: string; description: string; category: string }
  ) => {
    // const updatedTasks = [...todos];
    console.log("Updated Task:", updatedTask);
    // updatedTasks[index] = updatedTask;
     setDescription(updatedTask.description);
     setCategory(updatedTask.category);
     setTask(updatedTask.task);
    // setTodos(updatedTasks);
  };
    const handleDelete = (index: number) => {
    const updatedTasks = todos.filter((_, i) => i !== index);
    setTodos(updatedTasks);
  };
  return (
    <div className="to-do-form">
      <div className="current-todos">
        {ToDoList({ todos }, handleDelete, handleEdit)}
      </div>
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
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
export default ToDoForm;