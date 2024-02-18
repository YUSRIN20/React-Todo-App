import React, { useEffect, useState } from 'react';
import InputComponents from './components/InputComponents';
import TodoDisplay from './components/TodoDisplay';
import FilterComponent from './components/FilterComponent';

const App = () => {
  const [todos, setTodos] = useState([])  //it will adding like array of objects
  const [View,setView]=useState('All')  // this is for stauts filter in default status filter view is all
  const [FilteredTodos, SetFilterTodos] = useState([])
  const addTodoData = (newttile, newDescription) => {
    let newData = {
      id: todos.length + 1,
      title: newttile,
      description: newDescription,
      completed: false
  }
  
    setTodos([...todos, newData])
    console.log("added")
 
  }
  console.log(todos)

  const deletetodoitem = (id) => {  // this id represents the id the in new data obj
    console.log(id)
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  
  
  function changeView(e){    // value of dropdown status filter component 
    setView(e.target.value)
  }
  
  useEffect(()=>{
    if(View==='All'){
      SetFilterTodos(todos)
    }if(View==='Completed'){
      SetFilterTodos(todos.filter((todo)=>todo.completed===true))
    
    }if (View==='Not Completed'){
      SetFilterTodos(todos.filter((todo)=>todo.completed===false))
    }
  },[View,todos])
  return (
    <div>
      <InputComponents addTodoData={addTodoData} />
      <FilterComponent View ={View} setView={setView} changeView={changeView} />

      <div class="container">
        <div class="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {FilteredTodos.map((item, index) => {
            return (
              <>
                <div class="col h-100 mt-3" >
                  <TodoDisplay
                  todos={todos}
                   item={item} 
                   index={index} 
                   deletetodoitem={deletetodoitem} 
                   setTodos={setTodos}/>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default App;