const Badge = ({bg_color, text_color, bs_style, text}) => {
    return (
        <small  style={{color: text_color,
                backgroundColor: bg_color}}
                className={bs_style}
                >
            {text}
        </small>
    )
}

Badge.defaultProps = {
    text: 'Badge',
    text_color: 'white',
    bs_style: 'badge',
}

export default Badge