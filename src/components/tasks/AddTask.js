import { BsCheck, BsX, BsChevronDown } from '../../../node_modules/react-icons/bs';
import { FiX, FiCheck, FiEdit, FiCopy, FiXSquare } from '../../../node_modules/react-icons/fi';

import Badge from '../badge/Badge'
import BadgeInput from '../badge/BadgeInput'
import BadgeButton from '../badge/BadgeButton'

import Today from '../Today'

const bgDanger = 'rgba(231, 76, 60, .3)'
const bgHover = 'rgba(231, 76, 60, .5)'
const bgSuccess = 'rgba(0, 188, 140, .3)'
const bgSuccessHover = 'rgba(0, 188, 140, .5)'

const Task = ({task, title, tagFE, tagBE, tagFS, tagCustom, person, onClick, onToggle, onDelete, onDuplicate }) => {
    return (
        <div className={`card mb-2 border-secondary`}>
            <div className='card-header pb-0 px-3'>
                <div className='d-flex justify-content-between align-items-topline'>
                    <input className='mr-1 text-break mb-0'>{title}</input>
                </div>
            <div>
                <p className='mt-1 mb-2 ml-1 user-select-none'>
                    <BadgeButton bs_style="badge btn btn-outline-danger mr-1 shadow-none" text='FE'/>
                    <BadgeButton bs_style="badge btn btn-outline-warning mr-1 shadow-none" text='BE'/>
                    <BadgeButton bs_style="badge btn btn-outline-info mr-1 shadow-none" text='FS'/>
                    <BadgeInput bs_style="border-secondary form-control mx-1" text={tagCustom}/>
                </p>
            </div>
            </div>
            <div className='card-body pt-3 pb-1 m-0'>
            <p>{task.text}</p>
            </div>
            <div className='card-footer user-select-none text-muted text-right pt-1 pb-2'>
                <small className='mx-2'>Added: {`${Today}`}</small>
                <Badge bg_color='rgb(45, 47, 50)' bs_style="badge" text={person}/>
            </div>
        </div>
    )}

export default Task