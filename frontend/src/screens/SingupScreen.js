import AuthForm from "../components/authscreen/AuthForm"
import FormGroup from "../components/authscreen/FormGroup"
import Navbar from "../components/Navbar"
import money from '../assets/money.png'

const SingupScreen = () => {
    return (
        <div className="auth">
            <Navbar 
                buttonText="Login"
                className="auth"
            />
            <main className="auth__main">
                <h1 className="auth__title">Enjoy the automated online expense tracker</h1>
                <AuthForm 
                    className="auth" 
                    buttonText="Sign up"
                >
                    <FormGroup 
                        className="auth"
                        label="Username"
                    />
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

export default SingupScreen
