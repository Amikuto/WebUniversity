import React from 'react';
import TaskItem from "./TaskItem";

const TaskList = ({tasks, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {tasks.map((task, index) =>
                <TaskItem remove={remove} number={index + 1} task={task} key={task.id}/>
            )}
        </div>
    );
};

export default TaskList;