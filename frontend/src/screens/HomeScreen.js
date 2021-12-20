import Button from "../components/Button"

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <nav className="homescreen__navbar">
                <h1>XPENSE</h1>    
                <Button 
                    text="Logout" 
                    className="homescreen__nav-button"
                />            
            </nav>
            
        </div>
    )
}

export default HomeScreen
