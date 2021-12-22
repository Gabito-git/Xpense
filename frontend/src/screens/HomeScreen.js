import Button from "../components/Button"
import Balance from "../components/homescreen/Balance"
import History from "../components/homescreen/History"
import TransactionForm from "../components/homescreen/TransactionForm"

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
                    <Balance />
                    
                    <TransactionForm />
                </div>
                <div className="homescreen__right">
                    <History />
                </div>
            </main>
            
        </div>
    )
}

export default HomeScreen
