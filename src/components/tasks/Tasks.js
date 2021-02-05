import Task from './Task'

const Tasks = ({ tasks, onClick, onDelete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onClick={onClick} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks