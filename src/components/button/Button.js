const Button = ({bg_color, text_color, b_style, text, isDisabled, onClick}) => {
    return (
        <button onClick={onClick}
                disabled={isDisabled}
                style={{color: text_color,
                backgroundColor: bg_color}}
                className={b_style}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Button',
    b_style: 'btn btn-primary',
    isDisabled: false,
}

export default Button