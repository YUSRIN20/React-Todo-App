import React, { useState } from 'react';


const InputComponents = ({addTodoData}) => {
    
    const[title,setTitle] = useState('')
    const [description,setDescription] = useState('')

     const addTodoBtn = () => {
        if (!title.trim() || !description.trim()) {
            alert('Please enter both title and description.');
            return;
        }
        addTodoData(title, description);
        setTitle('');
        setDescription('');
    };
    
    const handleKeyPress = (event)=>{
      if(event.key==='Enter'){
         addTodoData(title,description)
        setTitle('')
        setDescription('')
      }
    }
    
    return (
        <section class="container ">
        <div>
            <div class="text-center">
                <h1 style={{color:"#157447"}}>ToDo</h1>
            </div>
            <div class="row gx-4 gx-lg-4 row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-evenly mt-5" id="inputs">
                    <input class="form-control w-25 " id="Search-input" name="Title" placeholder='Todo Name'  value={title} onChange={e=>setTitle(e.target.value)} />

                    <input class="form-control w-25"  name="description" placeholder='Todo Description'  value={description} onChange={e=>setDescription(e.target.value)} />

                    <button class="btn btn-success px-3" onClick={addTodoBtn}  >Add</button>
            </div>
        </div>
        </section>
        
    );
};

export default InputComponents;