import { BsCheck } from '../../../node_modules/react-icons/bs';
import { BsX } from '../../../node_modules/react-icons/bs';

import Badge from '../Badge'
import Button from '../button/Button'
import BadgeButton from '../button/BadgeButton'

const Task = ({ task }) => {
    return (
        <div className='card mb-2'>
            <div className='card-header pb-0 px-3'>
                <div className='d-flex justify-content-between align-items-baseline'>
                    <h5 className='mb-0'>{task.title}</h5>
                    {task.isDone ?
                        <BadgeButton b_style="badge btn btn-outline-success mr-1" bg_color='rgba(0, 188, 140, .2)' text={<><BsCheck /> Done</>}/>
                    :
                        <BadgeButton b_style="badge btn btn-outline-danger mr-1" bg_color='rgba(231, 76, 60, .2)' text={<><BsX /> Not Done</>}/>
                    }
                </div>
<div className="btn-group" role="group">
    <button id="btnGroupDrop2" type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop2" style={{}}>
            <a className="dropdown-item" href="#">Dropdown link</a>
            <a className="dropdown-item" href="#">Dropdown link</a>
        </div>
</div>
                
                <p className='mb-2 pl-2'>
                    <Badge b_style="user-select-none badge badge-danger mr-1" text={task.tagFE}/>
                    <Badge b_style="user-select-none badge badge-warning mr-1" text={task.tagBE}/>
                    <Badge b_style="user-select-none badge badge-info mr-1" text={task.tagFS}/>
                </p>
            </div>
            <div className='card-body'>
            <p>{task.text}</p>
            </div>
            <div className='card-footer user-select-none text-muted text-right py-1'>
                <small className='mx-2'>Added: {task.date_added}</small>
                <Badge bg_color='rgb(42, 45, 47)' b_style="badge bg-dark mr-1" text={task.person}/>
            </div>
        </div>
    )
}

export default Task