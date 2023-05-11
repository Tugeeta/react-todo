import  React from "react";
function TodoListItem (props) {
       const todo = props;  
    return ( 
           <div>
            <li>
<span>{todo.objectId}</span>
<span>{todo.objectTitle}</span>
        </li>
        </div>
)};
       export default TodoListItem;