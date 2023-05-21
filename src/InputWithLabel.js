import React from 'react';


 function InputWithLabel({children, Id, title, todoTitle, handleTitleChange}) {
 
  const inputRef = React.useRef();


 React.useEffect(()=> {
     inputRef.current.focus();
 
 });


   return (
 <>
<label htmlFor= 'Id' > {children} </label>
&nbsp;
<input type = "text"
ref={inputRef}
id={Id}
name ={title}
value={todoTitle}
onChange={handleTitleChange}/>
</>
 );
};


export default InputWithLabel;