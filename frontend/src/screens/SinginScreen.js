import { useHistory } from 'react-router-dom'

import AuthForm from "../components/authscreen/AuthForm"
import FormGroup from "../components/authscreen/FormGroup"
import Navbar from "../components/Navbar"
import money from '../assets/money.png'

const SinginScreen = () => {

    const history = useHistory()

    return (
        <div className="auth">
            <Navbar 
                buttonText="Sign up"
                className="auth"
                onTitleClick = { () => history.push('/auth') }
            />
            <main className="auth__main">
                <h1 className="auth__title">Experience a fresh way to manage money</h1>
                <AuthForm
                    className="auth" 
                    buttonText="Sign in"
                >
                    <FormGroup
                        className="auth"
                        label="Email"
                        type="email"
                    />
                    <FormGroup 
                        className="auth"
                        label="Password"
                        type="password"
                    />
                </AuthForm>
                <div className="auth__bottom"></div>
                <div className="auth__money animate__animated animate__rotateIn">
                    <img src={ money } alt="money" />
                </div>
            </main>
        </div>
    )
}

export default SinginScreen
