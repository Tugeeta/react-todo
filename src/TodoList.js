import React from 'react';
import TodoListItem from './TodoListItem';


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

      function TodoList ({todoList, onRemoveTodo}) {
        return (
          <div>
          <ul>
        {todoList.map((todo) => (
         <TodoListItem key={todo.id} todo={todo}
         onRemoveTodo={onRemoveTodo}
         />


        ))};
        </ul>
        </div>
         );
        }  
 export default TodoList;
