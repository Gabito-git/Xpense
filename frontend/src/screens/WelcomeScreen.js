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

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // width="100"
                    className="welcome__path"
                    viewBox="50 90 1280 180"
                >
                    <path
                    fill="#F0BB62"
                    d="M0,0L40,37.3C80,75,160,149,240,192C320,235,400,245,480,213.3C560,181,640,107,720,112C800,117,880,203,960,234.7C1040,267,1120,245,1200,213.3C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                </svg>
            </main>
        </div>
    )
}

export default WelcomeScreen
