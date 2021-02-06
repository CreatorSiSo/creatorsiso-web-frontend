import Header from './Header'

import Button from './button/Button'

import CardHeader from './card/CardHeader'
import CardBody from './card/CardBody'

import Tasks from './tasks/Tasks'

import { useState } from 'react'

const pageTitle = 'Status Tracker'
const TaskTracker = () => {

    const toggleTaskStatus = (id) => {
        setTasks(tasks.map((task) => task.id === id ?
        { ...task, isDone: !task.isDone }
        :
        task
        ))
    }
    
    const addTask = (id) => {
        console.log(id.currentTarget)
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    /* const duplicateTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    } */

    const [tasks, setTasks] = useState([
        {
            id: '2',
            title: 'Build Authentication System',
            person: 'CreatorSiSo',
            tagFE: '',
            tagBE: 'BE',
            tagFS: '',
            tagCustom: 'LernSax',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium voluptatem, cum in culpa non consectetur suscipit, mollitia numquam doloribus sint, molestias maxime dolore eos autem amet a distinctio?',
            date_added: '04/02/2020',
            date_done: '',
            isDone: false,
        },
        {
            id: '1',
            title: 'Rebuild Login Page with React',
            person: 'CreatorSiSo',
            tagFE: 'FE',
            tagBE: '',
            tagFS: 'FS',
            tagCustom: 'LernSax',
            text: 'Aut laudantium voluptatem, cum in culpa non consectetur suscipit, mollitia numquam doloribus sint, molestias maxime dolore eos autem amet a distinctio?',
            date_added: '04/02/2020',
            date_done: '',
            isDone: false,
        },
        {
            id: '0',
            title: 'Test Task',
            person: 'CreatorSiSo',
            tagFE: 'FE',
            tagBE: 'BE',
            tagFS: 'FS',
            tagCustom: 'Website',
            text: 'Aut laudantium voluptatem, cum in culpa non consectetur suscipit, mollitia numquam doloribus sint, molestias maxime dolore eos autem amet a distinctio?',
            date_added: '04/02/2020',
            date_done: '',
            isDone: true,
        },
    ])

    return (
        <div style={{marginBottom: 15 + 'em'}}>
            <Header bg_color='rgb(40, 42, 47)' text_color='white' b_style= 'font-weight-bold text-monospace py-2 m-0' text= {pageTitle}/>
            <div className="container" style={{maxWidth: 800}}>
                <div className='card mt-5'>
                    <CardHeader text={
                            <div className='text-right'>
                                <Button onClick={addTask} text={<strong>+ Add new Task</strong>}/>
                            </div>
                    }/>
                    {tasks.length > 0 ? (
                        <CardBody text={<Tasks onClick={addTask} onToggle={toggleTaskStatus} onDelete={deleteTask} tasks={tasks}/>}/>
                    )   :   (
                        <CardBody text={<div className='text-center'><strong>Go on and create a new Task.</strong>
                        <br/>
                        <small className='text-muted'>You probably got stuff to do ;)</small>
                        </div>}/>
                    )}
                    
                </div>
            </div>
        </div>
    )
}

export default TaskTracker