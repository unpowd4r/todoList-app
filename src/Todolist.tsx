import React, {useState} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean,
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void,
    addTask: (title: string) => void
}

export let Todolist = (props: PropsType) => {
    const {tasks, title, removeTask, changeFilter, addTask} = props

    const [newTaskTitle, setNewTaskTitle] = useState('')

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={newTaskTitle} onChange={(e) => {
                    setNewTaskTitle(e.currentTarget.value)
                }} onKeyPress={(e) => {
                    if (e.charCode === 13) {
                        addTask(newTaskTitle)
                        setNewTaskTitle('')
                    }
                }}/>
                <button onClick={() => {
                    addTask(newTaskTitle);
                    setNewTaskTitle('')
                }}>+
                </button>
            </div>
            <ul>
                {
                    tasks.map(t => {
                        const onRemoveHandler = () => {
                            removeTask(t.id)
                        }
                        return <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => onRemoveHandler}>x</button>
                        </li>
                    })
                }
            </ul>
            <div>
                <button onClick={() => {
                    changeFilter('all')
                }}>All
                </button>
                <button onClick={() => {
                    changeFilter('active')
                }}>Active
                </button>
                <button onClick={() => {
                    changeFilter('completed')
                }}>Completed
                </button>
            </div>
        </div>
    )
}
