import Task from './Task'

const Tasks = ({ tasks, onClick, onToggle, onDelete}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onClick={onClick} onToggle={onToggle} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks