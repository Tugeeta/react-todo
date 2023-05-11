import {useState} from 'react';


function AddTodoForm ({onAddTodo}) {
  
   const[todoTitle, setTodoTitle] = useState('');
 
   const handleAddTodo =(event)=>{
       event.preventDefault();
       const newTodo = {
        title:todoTitle,
        id: Date.now(),
       };
       
        onAddTodo(newTodo);
        setTodoTitle('');
     };
       
        const handleTitleChange =(event) => {
           const newTodoTitle = event.target.value;
           setTodoTitle(newTodoTitle);
   };


return(
<div>
<h1>  Form </h1>
<form onSubmit={handleAddTodo}>
<label htmlFor='todoTitle'>
  Title
</label>
<input type = "text" id='todoTitle' name ='title' value={todoTitle}
onChange={handleTitleChange}/>


<button type='submit'> Add </button>


</form>
</div>


);
}
export default AddTodoForm;
