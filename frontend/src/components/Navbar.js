import Button from "./Button"

const Navbar = ({ className, buttonText, onTitleClick }) => {
    return (
        <nav className={`${ className }__navbar`}>
            <h1 
                onClick={ onTitleClick }
                style={ { cursor: `${ onTitleClick ? 'pointer': ' default' }` } }
            >XPENSE</h1>    
            <Button
                text={ buttonText } 
                className={`${ className }__nav-button`}
            />            
        </nav>
    )
}

export default Navbar
