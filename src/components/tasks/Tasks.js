import Task from './Task'

const Tasks = ({ tasks, onClick, onToggle, onDelete, onDuplicate }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onClick={onClick} onToggle={onToggle} onDelete={onDelete} onDuplicate={onDuplicate}/>
            ))}
        </>
    )
}

export default Tasks