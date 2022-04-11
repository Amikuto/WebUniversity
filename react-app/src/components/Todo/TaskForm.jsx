import React, {useState} from 'react';
import Input from "../UI/input/Input";
import MyButton from "../UI/button/MyButton";
import DateTimePicker from 'react-datetime-picker'
import Select from "../UI/select/Select";
import '../../styles/todo/Dtpicker.css'

const TaskForm = ({create, task_types}) => {
    const [task, setTask] = useState({title: "", body: "", type: task_types.at(0), endDateTime: new Date()})

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
                <Input
                    value={task.title}
                    onChange={e => setTask({...task, title: e.target.value})}
                    type={"text"}
                    placeholder={"Название задачи"}
                />
                <Input
                    value={task.body}
                    onChange={e => setTask({...task, body: e.target.value})}
                    type={"text"}
                    placeholder={"Описание задачи"}
                />
                <div style={{position: "relative", top: "50%"}}>
                    <Select
                        value={task.type}
                        onChange={e => setTask({...task, type: e})}
                        defaultValue={"Категория"}
                        options={task_types}
                    />
                    <br/>
                    <DateTimePicker value={task.endDateTime} onChange={e => setTask({...task, endDateTime: e})}
                                    maxDetail={"hour"} locale={"ru-RU"} className={"dtpicker"}/>
                </div>
                <MyButton onClick={addNewTask}>Создать задачу</MyButton>
            </form>
        </div>
    );
};

export default TaskForm;