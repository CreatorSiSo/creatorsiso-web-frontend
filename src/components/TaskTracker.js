import Header from './Header'

import Button from './button/Button'

import CardHeader from './card/CardHeader'
import CardBody from './card/CardBody'

import Tasks from './tasks/Tasks'

import { useState } from 'react'

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

    const duplicateTask = (task) => {
        const newId = Math.floor(Math.random()*999999)+Math.floor(Math.random())
        const duplicatedTask = 
            {
                id: newId,
                title: task.title,
                person: task.person,
                tagFE: task.tagFE,
                tagBE: task.tagBE,
                tagFS: task.tagFS,
                tagCustom: task.tagCustom,
                text: task.text,
                date_added: task.date_added,
                date_done: task.date_done,
                isDone: task.isDone,
            }
        setTasks(...tasks, [duplicatedTask])
        console.log(tasks)
    }

    const [tasks, setTasks] = useState([
        {
            id: '4',
            title: 'Go on and delete all Messages! :)',
            person: 'Who knows maybe the Tasks wrote this',
            tagFE: 'WE',
            tagBE: 'WANT',
            tagFS: 'TO',
            tagCustom: 'BE GONE',
            text: 'DELETE US NOW!!',
            date_added: '00/00/0000',
            date_done: '',
            isDone: false,
        },
        {
            id: '3',
            title: 'Make a About Me Page',
            person: 'CreatorSiSo',
            tagFE: 'FE',
            tagBE: '',
            tagFS: 'FS',
            tagCustom: 'Website',
            text: 'Name; Where im from; What i do: Blender/3d, Websites, Designs, Video Editing; And other Stuff',
            date_added: '06/02/2021',
            date_done: '',
            isDone: false,
        },
        {
            id: '2',
            title: 'Build Authentication System',
            person: 'CreatorSiSo',
            tagFE: '',
            tagBE: 'BE',
            tagFS: '',
            tagCustom: 'LernSax',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium voluptatem, cum in culpa non consectetur suscipit, mollitia numquam doloribus sint, molestias maxime dolore eos autem amet a distinctio?',
            date_added: '04/02/2021',
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
            date_added: '04/02/2021',
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
            date_added: '04/02/2021',
            date_done: '',
            isDone: true,
        },
    ])

    return (
        <div style={{marginBottom: 15 + 'em'}}>
            <Header bg_color='rgb(40, 42, 47)' bs_style_Text='font-weight-bold text-monospace pt-2 pb-0 m-0' /* bs_style_small_Text='p-5' */ text={'<TaskTracker/>'} small_Text={'by CreatorSiSo'}/>
            <div className="container" style={{maxWidth: 800}}>
                <div className='card mt-5'>
                    <CardHeader text={
                        <div className='text-right'>
                            <Button onClick={addTask} text={<strong>+ Add new Task</strong>}/>
                        </div>
                    }/>
                    {tasks.length > 0 ? (
                        <CardBody text={<Tasks onClick={addTask} onToggle={toggleTaskStatus} onDelete={deleteTask} onDuplicate={duplicateTask} tasks={tasks}/>}/>
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