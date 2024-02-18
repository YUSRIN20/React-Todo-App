import React from 'react';


const FilterComponent = ({changeView}) => {
 
    return (
        <div class="container mt-5" >
        <div class=" d-flex justify-content-between ">
          <h1 class="d-sm-inline-flex">My Todos</h1>
          <div class="d-flex">
            <h1 class="me-2"> Status:</h1>
            <select onChange={changeView} class="btn btn-danger dropdown-toggle">
              <option value='All'>All</option>
              <option value='Not Completed'>Not Completed </option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
        </div>
      </div>
      

        
    );
};

export default FilterComponent;