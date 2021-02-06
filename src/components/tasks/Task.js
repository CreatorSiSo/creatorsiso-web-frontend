import { BsCheck, BsX, BsChevronDown } from '../../../node_modules/react-icons/bs';
import { FiX, FiCheck, FiEdit, FiCopy, FiXSquare } from '../../../node_modules/react-icons/fi';

import Badge from '../Badge'
import ButtonNestedDropdown from '../button/ButtonNestedDropdown'

const bgDanger = 'rgba(231, 76, 60, .3)'
const bgHover = 'rgba(231, 76, 60, .5)'
const bgSuccess = 'rgba(0, 188, 140, .3)'
const bgSuccessHover = 'rgba(0, 188, 140, .5)'

const Task = ({ task, onClick, onToggle, onDelete, onDuplicate }) => {
    return (
        <div className={`card mb-2 ${[task.isDone ? 'border-success' : 'border-danger']}`}>
            <div className='card-header pb-0 px-3'>
                <div className='d-flex justify-content-between align-items-topline'>
                    <h5 className='mb-0 mr-3'>{task.title}</h5>
                    <div>
                        {task.isDone ?
                            <ButtonNestedDropdown   bs_style_button='border-success btn btn-outline-success badge'
                                                    bs_style_dropdown='border-success btn btn-outline-success badge rounded-right'
                                                    bs_style_dropdown_menu= 'dropdown-menu dropdown-menu-right border-success'
                                                    bs_style_dropdown_item= 'dropdown-item d-flex align-items-center'

                                                    bg_color={bgSuccess}
                                                    
                                                    button_text='Done'
                                                    dropdown_item1_text='Edit Task'
                                                    dropdown_item2_text='Delete Task'
                                                    dropdown_item3_text='Duplicate Task'

                                                    button_icon={<FiCheck/>}
                                                    dropdown_icon={<BsChevronDown/>}
                                                    dropdown_item1_icon={<FiEdit className='mr-3'/>}
                                                    dropdown_item2_icon={<FiXSquare className='mr-3'/>}
                                                    dropdown_item3_icon={<FiCopy className='mr-3'/>}

                                                    isCustomDropdownMenuStyle= {false}
                                                    isCustomDropdownItemStyle= {false}

                                                    onClick={onClick}
                                                    onToggle={onToggle}
                                                    onDelete={onDelete}
                                                    onDuplicate={onDuplicate}
                                                    task={task}
                            />
                        :
                            <ButtonNestedDropdown   bs_style_button='border-danger btn btn-outline-danger badge'
                                                    bs_style_dropdown='border-danger btn btn-outline-danger badge rounded-right'
                                                    bs_style_dropdown_menu= 'dropdown-menu dropdown-menu-right border-danger'
                                                    bs_style_dropdown_item= 'dropdown-item d-flex align-items-center'

                                                    bg_color={bgDanger}
                                                    
                                                    button_text='Not Done'
                                                    dropdown_item1_text='Edit Task'
                                                    dropdown_item2_text='Delete Task'
                                                    dropdown_item3_text='Duplicate Task'

                                                    button_icon={<FiX/>}
                                                    dropdown_icon={<BsChevronDown/>}
                                                    dropdown_item1_icon={<FiEdit className='mr-3'/>}
                                                    dropdown_item2_icon={<FiXSquare className='mr-3'/>}
                                                    dropdown_item3_icon={<FiCopy className='mr-3'/>}

                                                    isCustomDropdownMenuStyle= {false}
                                                    isCustomDropdownItemStyle= {false}

                                                    onClick={onClick}
                                                    onToggle={onToggle}
                                                    onDelete={onDelete}
                                                    onDuplicate={onDuplicate}
                                                    task={task}
                        />}
                    </div>
                </div>
            <div>
                <p className='mt-2 ml-1 user-select-none'>
                    <Badge bs_style="badge badge-danger mr-1" text={task.tagFE}/>
                    <Badge bs_style="badge badge-warning mr-1" text={task.tagBE}/>
                    <Badge bs_style="badge badge-info mr-1" text={task.tagFS}/>
                    <Badge bs_style="badge btn border-secondary mx-1" text={task.tagCustom}/>
                </p>
            </div>
            <div className='card-body'>
            <p>{task.text}</p>
            </div>
            <div className='card-footer user-select-none text-muted text-right py-1'>
                <small className='mx-2'>Added: {task.date_added}</small>
                <Badge bg_color='rgb(45, 47, 50)' b_style="badge" text={task.person}/>
            </div>
        </div>
        </div>
    )}

export default Task