import React from 'react';
import classes from "./TodoSelect.module.css"

const TodoSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            id={classes}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default TodoSelect;