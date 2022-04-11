import React from 'react';
import MyButton from "../UI/button/MyButton";

const TaskItem = (props) => {
    const options = {month: 'long', day: 'numeric', hour: '2-digit'};

    return (
        <div className={"task"}>
            <div className={"task-content"}>
                <h4>{props.number}. {props.task.title}</h4>
                <div>
                    {props.task.body}
                    <br/>
                    До: {props.task.endDateTime.toLocaleString("ru-RU", options)} часов
                </div>
                <MyButton className={"task__btns"} onClick={() => props.remove(props.task)}>Удалить!</MyButton>
            </div>
        </div>
    );
};

export default TaskItem;