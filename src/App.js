import  React, {useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import {useState} from 'react';


function useSemiPersistentState () {
 const [todoList, setTodoList]=
   useState((JSON.parse(localStorage.getItem('savedTodoList')) || []));
  


  useEffect(() => {
   localStorage.setItem('savedTodoList', JSON.stringify(todoList));
 }, [todoList]);


 return[todoList, setTodoList](


   );


};
function App() {
 const[todoList, setTodoList] = useSemiPersistentState();


 function addTodo(newTodo) {
   setTodoList([...todoList, newTodo]);
   }
 
 return (


  <div>
    <header>
    <h1>Todo List</h1>
      <h3>Trendyfloristapp</h3>
      </header>
   
      <TodoList todoList={todoList}/>
    
       <AddTodoForm onAddTodo={addTodo}/>    
     
       {/*<p>
        Displaying the value of <strong>{newTodo}</strong>
</p>*/}
      
    </div>
   


)};


export default App;
