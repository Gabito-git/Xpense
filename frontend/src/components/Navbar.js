import Button from "./Button"

const Navbar = ({ className, buttonText }) => {
    return (
        <nav className={`${ className }__navbar`}>
            <h1>XPENSE</h1>    
            <Button
                text={ buttonText } 
                className={`${ className }__nav-button`}
            />            
        </nav>
    )
}

export default Navbar
