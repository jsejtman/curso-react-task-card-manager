import {createContext, useState} from "react";
import {useEffect} from "react";
import {tasks as data} from "../data/tasks.js";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    function createTask(taskTitle, taskDescription) {
        console.log(taskTitle)
        const newTask = {
            title: taskTitle,
            id: tasks.length,
            description: taskDescription
        }
        setTasks([...tasks, newTask]);
        console.log(tasks)
    }


    useEffect(() => {
        setTasks(data)
    }, [])


    function deleteTask(taskId) {
        console.log(taskId)
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}