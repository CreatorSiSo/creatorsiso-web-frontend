const ButtonNestedDropdown = ({ bg_color,
                                text_color,
                                bs_style_button,
                                bs_style_dropdown,
                                bs_style_dropdown_menu,
                                bs_style_dropdown_item,
                                button_text,
                                dropdown_text,
                                dropdown_item1_text,
                                dropdown_item2_text,
                                dropdown_item3_text,
                                button_icon,
                                dropdown_icon,
                                dropdown_item1_icon,
                                dropdown_item2_icon,
                                dropdown_item3_icon,
                                isDropdown,
                                isDisabled,
                                isCustomButtonStyle,
                                isCustomDropdownStyle,
                                isCustomDropdownMenuStyle,
                                isCustomDropdownItemStyle,
                                onClick,
                                onDelete,
                                deleteTask,
                                task,
}) => {
return (    <div    className='btn-group'
                    role="group"
                    aria-label="Button group with nested dropdown"
            >
                    <button type="button"
                                style={isCustomButtonStyle ? {
                                    backgroundColor: bg_color, color: text_color,}
                                :
                                    {}
                                }
                            className={bs_style_button}
                            onClick={onClick}
                    >
                                {button_icon} {button_text}
                    </button>
                <div    className="btn-group"
                        role="group"
                >
                    <button id="btnGroupDrop1"
                            type="button"
                            style={isCustomDropdownStyle ? {
                                    backgroundColor: bg_color, color: text_color,}
                                :
                                    {}
                            }
                            className={bs_style_dropdown}
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                                {dropdown_text} {dropdown_icon}
                    </button>
                    {isDropdown ?
                        <div    className= {bs_style_dropdown_menu}
                                style={isCustomDropdownMenuStyle ? {
                                        backgroundColor: bg_color, color: text_color,}
                                    :
                                        {}
                                }
                                  href="#"
                                aria-labelledby="btnGroupDrop1">
                            <a  className= {bs_style_dropdown_item}
                                style={isCustomDropdownMenuStyle ? {
                                        backgroundColor: bg_color, color: text_color,}
                                    :
                                        {}
                                }
                                href="#"
                            >
                                {dropdown_item1_icon}{dropdown_item1_text}
                            </a>
                            <a  className= {bs_style_dropdown_item}
                                style={isCustomDropdownMenuStyle ? {
                                        backgroundColor: bg_color, color: text_color,}
                                    :
                                        {}
                                }
                                onClick={() => onDelete(task.id)}
                                href="#"
                            >
                                {dropdown_item2_icon}{dropdown_item2_text}
                            </a>
                            <a  className= {bs_style_dropdown_item}
                                style={isCustomDropdownMenuStyle ? {
                                        backgroundColor: bg_color, color: text_color,}
                                    :
                                        {}
                                }
                                href="#"
                            >
                                {dropdown_item3_icon}{dropdown_item3_text}
                            </a>
                        </div>
                    :
                        <div></div>
                    }
                </div>
            </div>
    )
}

ButtonNestedDropdown.defaultProps = {
    isDisabled: false,
    isDropdown: true,

    button_text: 'Button',
    dropdown_text: '',
    dropdown_item1_text: 'Dropdown Item 1',
    dropdown_item2_text: 'Dropdown Item 2',
    dropdown_item3_text: 'Dropdown Item 3',

    bs_style_button:        'btn btn-secondary',
    bs_style_dropdown:      'btn btn-secondary rounded-right',
    bs_style_dropdown_menu: 'dropdown-menu dropdown-menu-right',
    bs_style_dropdown_item: 'dropdown-item',

    
    isCustomButtonStyle: true,
    isCustomDropdownStyle: true,
    isCustomDropdownMenuStyle: true,
    isCustomDropdownItemStyle: true,
}

export default ButtonNestedDropdown