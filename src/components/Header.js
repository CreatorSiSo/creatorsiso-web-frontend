const Header = ({bg_color, text_color, b_style,  text}) => {
    return (
        <header style={{color: text_color, backgroundColor: bg_color}} className='text-center'>
            <h1 className={b_style}>{text}</h1>
        </header>
    )
}

Header.defaultProps = {
    text: 'Header Text',
    b_style: 'py-2',
}

export default Header