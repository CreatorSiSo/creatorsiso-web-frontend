const BadgeButton = ({bg_color, text_color, bs_style, text, isDisabled, onClick}) => {
    return (
        <button
            style={{color: text_color,
                    backgroundColor: bg_color
            }}
            className={bs_style}
            type = 'button'
            disabled={isDisabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

BadgeButton.defaultProps = {
    text: 'Button',
    bs_style: 'badge btn border-primary',
    isDisabled: false,
}

export default BadgeButton