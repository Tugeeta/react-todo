import  React from 'react';



function TodoListItem ({todo, onRemoveTodo}) {
       const handleRemoveTodo = () => {
           onRemoveTodo(todo.id);
       };
   return (
          <div>
           <li>
           <span>{todo.title}</span>
           <span>
               <button type='button' onClick={handleRemoveTodo}>
                   Remove
                   </button>
           </span>
       </li>
       </div>
        )};
      export default TodoListItem;