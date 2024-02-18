import React, { useState, useEffect } from 'react';
import './style/TodoDisplay.css'


const TodoDisplay = ({ id, item, index, deletetodoitem, todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDesc, setNewDesc] = useState(item.description);
  const [completed, setCompleted] = useState(item.completed);

  useEffect(() => {
    setCompleted(item.completed);
  }, [item.completed]);

  const handleStatusChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Complete") {
      setCompleted(item.completed=true); // Update Completed to True
    } else if (selectedValue === "Not Complete") {
      setCompleted(item.completed=false); // Update Completed to False
    }
  };


  const handleEdit = () => {
    setEdit(true);
  };

  const handleSave = () => {
    setEdit(false);
    const updatedTodos = todos.map(todo => {
      if (todo.id === item.id) {
        return {
          ...todo,
          title: newTitle,
          description: newDesc,
          completed: completed
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
 
  const handleDelete = () => {
    deletetodoitem(item.id);
  };
   
  return (
    <div>
      <div key={index}>
        <div className="card h-100" id="card-w">
          <div className="card-body">
            <h3 className="card-title text-center">Task:{item.id}</h3>
           
           
            {edit ? (
              <div>
                <form>
                <input
                  class="form-control"
                  type="text"
                  value={newTitle}
                  placeholder='New Title'
                  required
                  style={{ margin: "0em 0em 0.2em" }}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
                <input
                  class="form-control"
                  type="text"
                  value={newDesc}
                  placeholder='New Description'
                  style={{ margin: "0.2em 0em 0" }}
                  required
                  onChange={(e) => setNewDesc(e.target.value)}
                />
                </form>
               
              </div>
            ) : (
              <>
                <h4 className="card-title" id="text-title" style={{margin:"0em 0em 0.5em"}}> Title: {item.title}</h4>
                <h4 className="card-description" style={{margin:"0em 0em 1em"}}>Description:{item.description}</h4>
              </>
            )}
            <div  style={{margin:"1em 0em"}}>
              <b>Status:</b>
              <select
                className="dropdown-toggle ms-2"
                id="card-dropdown"
                value={completed ? "Complete" : "Not Complete"}
                onChange={handleStatusChange}
              >
                <option className="btn btn-danger" value="Not Complete">Not-Completed</option>
                <option className="btn btn-success" value="Complete">Completed</option>
              </select>
              
            </div>
            <div className="d-flex justify-content-end" id="btndiv" >
              {edit ? (
                <button className="btn btn-primary" onClick={handleSave} style={{margin:"0em 1em"}}>Save</button>
              ) : (
                <button className="btn btn-success" onClick={handleEdit} style={{margin:"0em 1em"}}>Edit</button>
              )}
              <button className="btn btn-danger"   onClick={handleDelete} style={{margin:"0em 1em"}}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDisplay;
