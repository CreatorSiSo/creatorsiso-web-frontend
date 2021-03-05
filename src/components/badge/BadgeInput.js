const InputBadge = ({bg_color, text_color, bs_style, text}) => {
    return (
        <div className='badge m-0 p-0' >
            <input 
                type="text"
                name = {text}
                style={{color: text_color,
                        backgroundColor: bg_color,
                        width: '10em',
                        height: '100%',
                        margin: '0',
                        padding: '0',
                        paddingLeft: '7px',
                        paddingRight: '7px',
                        fontSize: '13px'
                }}
                className={bs_style}
            />
        </div>
        /* <small  style={{color: text_color,
                backgroundColor: bg_color}}
                className={bs_style}
                >
            {text}
        </small> */
    )
}

InputBadge.defaultProps = {
    text: 'Badge',
    text_color: 'white',
    bs_style: 'form-control',
}

export default InputBadge