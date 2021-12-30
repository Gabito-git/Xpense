import Button from "../components/Button"
import Balance from "../components/homescreen/Balance"
import History from "../components/homescreen/History"
import TransactionForm from "../components/homescreen/TransactionForm"
import Navbar from "../components/Navbar"

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <Navbar 
                className="homescreen"
                buttonText="Logout"
            />

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
