import  React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

       function App() {
               
  const [todoList, setTodoList]= useState (
 
  JSON.parse(localStorage.getItem('savedTodoList')) || []

  )};

  const [isLoading, setIsLoading] = useState(true);
  
    async function fetchData (
   
        
        useEffect = () => {
         fetchData () 
        }, []);
    
   
            const options = {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            }},
          
            
     url = (`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}\`,{
          
            });
             try {    
          const response = await fetch (url, options);
               console.log(response);
               const data = await response.json();
               console.log("API Data:", data);
             };

             if (!response.ok) {
              const message = ('Error occurred: ${response.status}');
              throw new Error(message);               
            };
      
           
            
            const todos = data.records.map((Todo) => {
              Id: records.Id,
              Title: records.fields.Title
              
           }
             return (todos)      
            

          )};
            setTodoList(todos);
            isLoading(false); 
         } catch (error) {
            console.error(error.message);
          
         };
        
  
            
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  }
  ) };

 return (
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
         );
        }
        

export default App;