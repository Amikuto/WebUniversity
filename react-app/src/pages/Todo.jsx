import React, {useMemo, useState} from 'react';
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import TodoSelect from "../components/UI/select/TodoSelect";
import "../styles/Todo.css"

const Todo = () => {

    const task_types = [
        {
            value: "personal",
            name: "Личные"
        },
        {
            value: "work",
            name: "Работа"
        },
        {
            value: "edu",
            name: "Учеба"
        },
        {
            value: "recreation",
            name: "Отдых"
        },
    ]

    const [tasks, setTasks] = useState([
            {
                id: 1,
                title: "Main Todo",
                body: "Научиться JS",
                type: "personal",
                endDateTime: new Date(2011, 0, 1, 1, 1, 1)
            },
            {
                id: 2,
                title: "Second Todo",
                body: "Приготовить обед",
                type: "personal",
                endDateTime: new Date(2011, 0, 1, 1, 1, 1)
            },
            {
                id: 3,
                title: "Third Todo",
                body: "Сделать домашку!",
                type: "edu",
                endDateTime: new Date(2011, 0, 1, 1, 1, 1)
            },
        ]
        // {
        // "personal": {
        //     name: "Личные",
        //     tasks: [
        //         {id: 1, title: "Main Todo", body: "Сделать домашку!"},
        //         {id: 2, title: "2 Todo", body: "Сделать 2!"},
        //         {id: 3, title: "3 Todo", body: "Сделать 3!"},
        //     ]
        // },
        // "work": {
        //     name: "Работа",
        //     tasks: [
        //         {id: 1, title: "Main Todo", body: "Сделать домашку!"},
        //         {id: 2, title: "2 Todo", body: "Сделать 2!"},
        //         {id: 3, title: "3 Todo", body: "Сделать 3!"},
        //     ]
        // },
        // "studies": {
        //     name: "Учеба",
        //     tasks: [
        //         {id: 1, title: "Main Todo", body: "Сделать домашку!"},
        //         {id: 2, title: "2 Todo", body: "Сделать 2!"},
        //         {id: 3, title: "3 Todo", body: "Сделать 3!"},
        //     ]
        // },
        // "recreation": {
        //     name: "Отдых",
        //     tasks: [
        //         {id: 1, title: "Main Todo", body: "Сделать домашку!"},
        //         {id: 2, title: "2 Todo", body: "Сделать 2!"},
        //         {id: 3, title: "3 Todo", body: "Сделать 3!"},
        //     ]
        // },
        // }
    )

    const [selectedSort, setSelectedSort] = useState('')
    // const [selectedTaskType, setSelectedTaskType] = useState(task_types.at(0))
    const [selectedTaskType, setSelectedTaskType] = useState(task_types.at(0).value)

    const createTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const removeTask = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id))
    }

    const sortTasksByValue = (sort) => {
        setSelectedSort(sort)
    }

    const sortedTasks = useMemo(() => {
        console.log(selectedSort)
        if (selectedSort && (selectedSort !== "time")) {
            return [...tasks].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return tasks
    }, [selectedSort, tasks])

    const sortedAndSearchedTasks = useMemo(() => {
        return sortedTasks.filter(task => task.type.includes(selectedTaskType))
    }, [selectedTaskType, sortedTasks])

    return (
        <div id={"todo-page"}>

            <div className={"Todo"}>
                {/*<LeftSidePanel/>*/}

                <div className={"todo-page"}>
                    <TaskForm create={createTask} task_types={task_types}/>
                    <hr style={{margin: "15px 0"}}/>
                    <div>
                        <TodoSelect
                            value={selectedTaskType}
                            onChange={e => setSelectedTaskType(e)}
                            defaultValue={"Категории"}
                            options={task_types}
                        />
                        <TodoSelect
                            value={selectedSort}
                            onChange={sortTasksByValue}
                            defaultValue={"Сортировка"}
                            options={[
                                {value: "time", name: "По времени"},
                                {value: "title", name: "По названию"},
                            ]}
                        />
                    </div>
                    {sortedAndSearchedTasks.length !== 0
                        ?
                        <TaskList remove={removeTask} tasks={sortedAndSearchedTasks} title={tasks.name}/>
                        :
                        <h1 style={{textAlign: "center"}}>
                            Никаких задач пока нет!
                        </h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default Todo;