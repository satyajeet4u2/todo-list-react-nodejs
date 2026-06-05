function ToDoList({ todos }: { todos: Array<{ task: string; description: string; category: string }> },onDelete: (index: number) => void,
  onEdit: (index: number, updatedTask: { task: string; description: string; category: string }) => void) {

  return (
    <div className="to-do-list">
      <ul>
       {todos.map((todo, index) => (
          <li key={index} className="to-do-item">
            {index + 1}.
            <strong>{todo.task}</strong> - {todo.description} ({todo.category})
            {/* <button className="delete-button">Delete</button>
            <button className="edit-button">Edit</button> */}
          </li>
        ))}      
      </ul>
       <table>
    <thead>
      <tr>      
        <th>Task</th>
        <th>Description</th>
        <th>Category</th>
        <th>Edit</th> 
        <th>Delete</th>    
        </tr>
    </thead>
    <tbody>
      {todos.map((todo, index) => (
        <tr key={index}>    
            <td>{todo.task}</td>
            <td>{todo.description}</td>
            <td>{todo.category}</td>    
            <td><button onClick={() => onEdit(index, todo)} className="edit-button">Edit</button></td>
            <td><button onClick={() => onDelete(index)} className="delete-button">Delete</button></td>
        </tr>       
        ))}
    </tbody>
    </table>
    </div>
    // also show in table format
 

  );
}   
export default ToDoList;