import Button from "../components/Button"
import Navbar from "../components/Navbar"

import bank_image from '../assets/bank-image.png'
import { useHistory } from "react-router-dom"

const WelcomeScreen = () => {

    const history = useHistory()

    return (
        <div className="welcome">
            <Navbar 
                buttonText="Login"
                className="welcome"
                onButtonClick= { () => history.push('/auth/signin')}
            />
            <main className="welcome__main"> 
                <div className="welcome__top">
                    <div className="welcome__info"> 
                        <h1 className="welcome__title">XPENSE</h1>
                        <p className="welcome__text">Your personal expense manager designed to help you keep track of your day-to-day expenses and incomes</p>
                        <Button 
                            text="Get started"
                            className="welcome__button"
                            onClick={ () => history.push('/auth/signup') }
                        />
                    </div>
                    <div className="welcome__bank-image animate__animated animate__backInUp" >
                        <img src={ bank_image } alt="bank" />
                    </div>
                </div>

            </main>
            <div className="welcome__bottom">
            </div>
        </div>
    )
}

export default WelcomeScreen
