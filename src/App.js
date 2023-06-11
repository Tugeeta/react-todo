import  React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

       function App() {          
  const [todoList, setTodoList]= useState (
  JSON.parse(localStorage.getItem('savedTodoList')) || []
  );
  const [isLoading, setIsLoading] = useState(true);

        useEffect = (() => {
         fetchData () 
        }, []);
    
    async function fetchData () {
      try {          
      const options = {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
          };
          
            
          const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
             
           const response = await fetch (url, options);
              
             if (!response.ok) {
              const message = ('Error occurred: ${response.status}');
              throw new Error(message);               
            }
      
            const data = await response.json();
            console.log("Data:", data); 
            
            const todos = data.records.map((records) => ({
              Id: records.Id,
              Title: records.fields.Title
              
           }));
               
             console.log("Todos:", todos);

          
            setTodoList(todos);
            setIsLoading(false); 
         } catch (error) {
            console.error(error.message);
            setIsLoading(false); 
          
         }
        }
        
  
            
      function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  
 return (
<BrowserRouter>
<Routes>
  <Route path='/' exact element = {
    <>

  <div>
    <header>
    <h1>Todo List</h1>
      <h3>Trendyfloristapp</h3>
      </header>

      <AddTodoForm onAddTodo={addTodo}/>
            
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        

       <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        
      )}
        
      
    </div>
   </>
         
        }></Route>
        
        <Route path='/new' element = {
          <h1>TrendyFlorist Check List</h1>}> 
        </Route>
         
       
    
      </Routes>

    </BrowserRouter>


 );
        }     

export default App;