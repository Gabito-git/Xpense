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

            <main className="homescreen__main">
                <div className="homescreen__left">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="homescreen__right">

                </div>
            </main>
            
        </div>
    )
}

export default HomeScreen
