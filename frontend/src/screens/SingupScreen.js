import AuthForm from "../components/authscreen/AuthForm"
import FormGroup from "../components/authscreen/FormGroup"
import Navbar from "../components/Navbar"

const SingupScreen = () => {
    return (
        <div className="auth">
            <Navbar 
                buttonText="Login"
                className="auth"
            />
            <main className="auth__main">
                <h1>Enjoy the automated online expense tracker</h1>
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
            </main>
        </div>
    )
}

export default SingupScreen
