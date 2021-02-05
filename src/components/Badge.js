const Badge = ({bg_color, text_color, b_style, text}) => {
    return (
        <small  style={{color: text_color,
                backgroundColor: bg_color}}
                className={b_style}
                >
            {text}
        </small>
    )
}

Badge.defaultProps = {
    text: 'Badge',
    text_color: 'white',
    b_style: 'badge',
}

export default Badge