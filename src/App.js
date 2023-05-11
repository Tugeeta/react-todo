import  React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState} from 'react';



function App() {
 //const [newTodo, setNewTodo] = useState('');
 const [todoList, setTodoList] = useState([]);


 function addTodo(newTodo) {


 setTodoList([...todoList, newTodo]);
 }

 return (
   <div>
     <header>
     <h1>Trendyfloristapp</h1>
       <h2>Todo List</h2>
       </header>

       <TodoList todoList={todoList}/>
      
        <AddTodoForm onAddTodo={addTodo}/> 

        {/*<p>
         Displaying the Value of <strong>{newTodo}</strong>
 </p>*/}
            </div>
  );
}

export default App;
