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
      
function TodoList() {
    return (
        <div>
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

export default TodoList;
