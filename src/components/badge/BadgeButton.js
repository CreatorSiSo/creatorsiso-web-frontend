const BadgeButton = ({bg_color, text_color, bs_style, text, isDisabled, onClick}) => {
    return (
        <button onClick={onClick}
                disabled={isDisabled}
                style={{color: text_color,
                backgroundColor: bg_color}}
                className={bs_style}>
            {text}
        </button>
    )
}

BadgeButton.defaultProps = {
    text: 'Button',
    bs_style: 'badge btn btn-outline-success',
    isDisabled: false,
}

export default BadgeButton