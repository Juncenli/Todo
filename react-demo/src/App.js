/* 
  Hooks are functions that let you “hook into” React state 
  and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes.
*/
import './App.css';
import TodoTable from './components/TodoTable';
import React, { useState } from 'react'
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  // create a array -> element is a class
  // setTodos is to update the todos variable
  // useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. 
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water olants', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User Three' },
  ]);


  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      // 防止当我们delete后，rowNumber不是unique的
      // 这样的写法一直会让rownumber从最后一个开始累加
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    }
    // setTodos to add a new Todo, the component will be re-render
    // In React, the spread operator ... is used to spread the elements of an array or the properties of an object into a new array or object.
    setTodos(todos => [...todos, newTodo]);

  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    // If the row number does not match the row number we're getting past in
    // we add it to the array
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-bady">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
          >
            {/* Ternary operator */}
            {showAddTodoForm ? "Close New Todo" : "New Todo"}
          </button>

          {/* React Conditional Rendering */}

          {
            showAddTodoForm &&
            <NewTodoForm addTodo={addTodo} />
          }

        </div>
      </div>
    </div>
  );
}

export default App;
