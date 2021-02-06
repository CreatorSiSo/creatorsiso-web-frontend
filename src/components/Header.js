const Header = ({bg_color, text_color, bs_style_Text, bs_style_small_Text, text, small_Text }) => {
    return (
        <header style={{color: text_color, backgroundColor: bg_color}} className='text-center'>
            <h2 className={bs_style_Text}>{text}</h2>
            <p className={bs_style_small_Text}>{small_Text}</p>
        </header>
    )
}

Header.defaultProps = {
    text: 'Header Text',
    bs_style_Text: 'pt-2',
    bs_style_small_Text: 'text-muted pb-3 m-0',
}

export default Header