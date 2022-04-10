import React from 'react';
import classes from "./TodoInput.module.css"

const TodoInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.todoInput} {...props}/>
    );
});

export default TodoInput;