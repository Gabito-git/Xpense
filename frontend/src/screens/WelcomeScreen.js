import Button from "../components/Button"
import Navbar from "../components/Navbar"

import bank_image from '../assets/bank-image.png'

const WelcomeScreen = () => {
    return (
        <div className="welcome">
            <Navbar 
                buttonText="Login"
                className="welcome"
            />
            <main className="welcome__main"> 
                <h1 className="welcome__title">XPENSE</h1>
                <p className="welcome__text">Your personal expense manager designed to help you keep track of your day-to-day expenses and incomes</p>
                <Button 
                    text="Get started"
                    className="welcome__button"
                />
                <div className="welcome__bank-image">
                    <img src={ bank_image } alt="bank" />
                </div>

                <div className="welcome__bottom">
                </div>
            </main>
        </div>
    )
}

export default WelcomeScreen
