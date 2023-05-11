import  React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState} from 'react';
import TodoListItem from './TodoListItem';


function App() {
 const [newTodo, setNewTodo] = useState('');
 return (
   <div>
     <header>
     <h1>Trendyfloristapp</h1>
       <h2>Todo List</h2>
       </header>

     <TodoList/>
     <TodoListItem/>

     <AddTodoForm onAddTodo={(todoTitle)=> setNewTodo(todoTitle)} />
        <p>
         Displaying the Value of <strong>{newTodo}</strong>
        </p>
            </div>
  );
}

export default App;
