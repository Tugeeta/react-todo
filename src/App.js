import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div>
      <header>
        <h1>TrendyFloristApp</h1>
        <h2>Todo List</h2>
        </header>
         <TodoList/>
         <AddTodoForm/>
    </div>
  );
}

export default App;
