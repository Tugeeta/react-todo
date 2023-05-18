import {useState, InputWithLabel} from 'react';


const AddTodoForm = ({onAddTodo}) => {
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

<InputWithLabel name ='todoTitle' value={todoTitle}
onChange={handleTitleChange} autoFocus={true}>
  <strong>Title:</strong>
  </InputWithLabel>

<button type='submit'> Add </button>


    </form>
</div>


);
}
export default AddTodoForm;
