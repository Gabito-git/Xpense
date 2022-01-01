import Button from "./Button"

const Navbar = ({ className, buttonText, onTitleClick, onButtonClick }) => {
    return (
        <nav className={`${ className }__navbar`}>
            <h1 
                onClick={ onTitleClick }
                style={ { cursor: `${ onTitleClick ? 'pointer': ' default' }` } }
            >XPENSE</h1>    
            <Button
                text={ buttonText } 
                className={`${ className }__nav-button`}
                onClick={ onButtonClick }
            />            
        </nav>
    )
}

export default Navbar
