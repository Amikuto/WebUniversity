import React, {useState} from 'react';
import TodoInput from "./UI/input/TodoInput";
import MyButton from "./UI/button/MyButton";
import DateTimePicker from 'react-datetime-picker'
import TodoSelect from "./UI/select/TodoSelect";

const TaskForm = ({create, task_types}) => {
    const [task, setTask] = useState({title: "", body: "", type: "", endDateTime: new Date()})

    function addNewTask(e) {
        e.preventDefault()
        const newTask = {
            ...task, id: Date.now()
        }
        create(newTask)
        setTask({title: "", body: "", type: task.type, endDateTime: new Date()})
    }

    return (
        <div>
            <form>
                <TodoInput
                    value={task.title}
                    onChange={e => setTask({...task, title: e.target.value})}
                    type={"text"}
                    placeholder={"Название задачи"}
                />
                <TodoInput
                    value={task.body}
                    onChange={e => setTask({...task, body: e.target.value})}
                    type={"text"}
                    placeholder={"Описание задачи"}
                />
                <TodoSelect
                    value={task.type}
                    onChange={e => setTask({...task, type: e})}
                    defaultValue={"Категория"}
                    options={task_types}
                />
                <DateTimePicker value={task.endDateTime} onChange={e => setTask({...task, endDateTime: e})}
                                maxDetail={"hour"} locale={"ru-RU"}/>
                <br/>
                <MyButton onClick={addNewTask}>Создать задачу</MyButton>
            </form>
        </div>
    );
};

export default TaskForm;