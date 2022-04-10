import React from 'react';
import {Button} from "react-bootstrap";
import classes from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;