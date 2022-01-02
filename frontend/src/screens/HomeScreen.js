import { useContext } from "react"
import { setCurrentUser } from "../actions/auth"

import Button from "../components/Button"
import Balance from "../components/homescreen/Balance"
import History from "../components/homescreen/History"
import TransactionForm from "../components/homescreen/TransactionForm"
import Navbar from "../components/Navbar"
import { AuthContext } from "../context/authContext"
import fetchHelper from "../helpers/fetchHelper"

const HomeScreen = () => {

    const { dispatch } = useContext(AuthContext)

    const handleSignOut = async() => {
        await fetchHelper({
            url:'users/signout',
            method: 'get'
        })

        dispatch( setCurrentUser( null ) );
    }

    return (
        <div className="homescreen">
            <Navbar 
                className="homescreen"
                buttonText="Logout"
                onButtonClick={ handleSignOut }
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
