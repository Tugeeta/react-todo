import  React from 'react';

function TodoListItem ({todo}) {
       
    return ( 
           <div>
            <li>
<span>{todo.objectId}</span>
<span>{todo.objectTitle}</span>
        </li>
        </div>
)};
       export default TodoListItem;