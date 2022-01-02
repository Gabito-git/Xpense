import Button from "./Button"

const Navbar = ({ className, buttonText, onTitleClick, onButtonClick, username=null}) => {
    return (
        <nav className={`${ className }__navbar`}>
            <h1 
                onClick={ onTitleClick }
                style={ { cursor: `${ onTitleClick ? 'pointer': ' default' }` } }
            >XPENSE</h1>    
            
            <div className={`${ className }__nav-right`}>
                {
                    username && (
                        <div className={`${ className }__nav-username`}>
                            <h3>{ username }</h3>
                        </div>  
                    )
                }

                <Button
                    text={ buttonText } 
                    className={`${ className }__nav-button`}
                    onClick={ onButtonClick }
                />  
    
            </div>
            
                    
        </nav>
    )
}

export default Navbar
