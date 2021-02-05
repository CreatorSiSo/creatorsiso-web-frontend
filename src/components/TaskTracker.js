import Header from './Header'

import Button from './button/Button'

import CardHeader from './card/CardHeader'
import CardBody from './card/CardBody'

import Tasks from './tasks/Tasks'
import { useState } from 'react'

const pageTitle = 'Task Tracker'
const TaskTracker = () => {
    const onClick = () => {
        console.log('click')
    }
    const [tasks, setTasks] = useState([
        {
            id: '2',
            title: 'Build Authentication System',
            person: 'CreatorSiSo',
            tagFE: '',
            tagBE: 'BE',
            tagFS: '',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium voluptatem, cum in culpa non consectetur suscipit, mollitia numquam doloribus sint, molestias maxime dolore eos autem amet a distinctio?',
            date_added: '04/02/2020',
            date_done: '',
            isDone: false,
        },
        {
            id: '1',
            title: 'Build Login Page',
            person: 'CreatorSiSo',
            tagFE: 'FE',
            tagBE: '',
            tagFS: 'FS',
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
                            <Button onClick={onClick} text={<strong>+ Add new Task</strong>}/>
                        </div>
                    }/>
                    <CardBody text={<Tasks tasks={tasks}/>}/>
                </div>
            </div>
        </div>
    )
}

export default TaskTracker
