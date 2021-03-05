const InputBadge = ({bg_color, text_color, bs_style, text}) => {
    return (
        <small  style={{color: text_color,
                backgroundColor: bg_color}}
                className={bs_style}
                >
            {text}
        </small>
    )
}

InputBadge.defaultProps = {
    text: 'Badge',
    text_color: 'white',
    bs_style: 'badge',
}

export default InputBadge