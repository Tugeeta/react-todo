import  React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


        function App() {
               
        const [todoList, setTodoList]= useState (
       
        JSON.parse(localStorage.getItem('savedTodoList')) || []

        );

        const [isLoading, setIsLoading] = React.useState(true);
  

   useEffect(() => {
    const loadTodoList = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { todoList: todoList  } });
    }, 2000);
  
  });

  loadTodoList
      .then((result) => {
        
        setTodoList(result.data.todoList);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }

 return (
<>

  <div>
    <header>
    <h1>Todo List</h1>
      <h3>Trendyfloristapp</h3>
      </header>
      
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
     
        
        <AddTodoForm onAddTodo={addTodo}/>
      )}
        
      
    </div>
   </>
         )};


export default App;