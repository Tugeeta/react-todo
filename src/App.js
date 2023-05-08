import React from 'react';

const todoList = [
  {
    Id:1,
    Title:"Pre-made Flower Basket:\n",
    },
     {
     Id:2,
    Title:"Selection of Multicolor Flowers:\n",
    },
     {
    Id:3,
    Title:"Speciality Rose Bouquets:\n",
    },
    {
    Id:4,
      Title:"Design Your Own Floral Arrangement:\n",
      },
    ];

function App() {
  return (
    <div>
      <header>
        <h1>TrendyFloristApp</h1>
        <h2>Todo List</h2>
        </header>
        <ul>
        {todoList.map(function(item){
               return (
               <li key = {item.Id}>
                <span>{item.Title}</span>
          

        
      

      </li>
               );
        })}    
           </ul>       
      
      
      
    </div>
  );
}

export default App;
