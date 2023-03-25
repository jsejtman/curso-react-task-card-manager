import TaskCard from "./TaskCard.jsx";
import {useContext} from "react";
import {TaskContext} from "../context/TaskContext.jsx";

function TaskList() {

    const {tasks} = useContext(TaskContext)

    let retorno;

    if (tasks.length === 0) {
        retorno = <h1 className="text-white text-4xl text-bold text-center">No hay tareas</h1>
    } else {

        retorno = (
            <div className="grid grid-cols-4 gap-2">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                ))}
            </div>
        )
    }

    return retorno;
}

export default TaskList;