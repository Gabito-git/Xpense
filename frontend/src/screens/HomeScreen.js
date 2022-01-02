import { useContext, useEffect } from "react"

import Button from "../components/Button"
import Balance from "../components/homescreen/Balance"
import History from "../components/homescreen/History"
import TransactionForm from "../components/homescreen/TransactionForm"
import Navbar from "../components/Navbar"
import { AuthContext } from "../context/authContext"
import fetchHelper from "../helpers/fetchHelper"
import { signOutAuth } from '../actions/auth'
import { setTransactions, signOutTransactions } from "../actions/transactions"
import { TransactionContext } from "../context/transactionContext"
import Swal from "sweetalert2"

const HomeScreen = () => {

    const { state:{ currentUser }, dispatch: authDispatch} = useContext(AuthContext)
    const { dispatch: transactionDispatch  } = useContext( TransactionContext )

    useEffect(() => {
        const getTransactions = async() => {
            const data = await fetchHelper({
                url: 'transactions',
                method: 'get'
            })
            const response = await data.json();

            if(response.errors){
                return Swal.fire('Ooops', response.errors[0].message, "error")
            }

            transactionDispatch(setTransactions( response.transactions ))
            
        }

        getTransactions();
    }, [])

    const handleSignOut = async() => {
        await fetchHelper({
            url:'users/signout',
            method: 'get'
        })

        transactionDispatch( signOutTransactions());
        authDispatch( signOutAuth() );
    }

    return (
        <div className="homescreen">
            <Navbar 
                className="homescreen"
                buttonText="Logout"
                onButtonClick={ handleSignOut }
                username={ currentUser.username.toUpperCase() }
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
