import { useHistory } from 'react-router-dom'

import AuthForm from "../components/authscreen/AuthForm"
import FormGroup from "../components/authscreen/FormGroup"
import useFormControl from '../hooks/useFormControl'
import Navbar from "../components/Navbar"
import money from '../assets/money.png'

const initialValues={
    username: '',
    email: '',
    password: '',
    password2: ''
}

const SingupScreen = () => {

    const history = useHistory();
    const { values, errors, functions } = useFormControl({
        initialValues
    });

    return (
        <div className="auth">
            <Navbar 
                buttonText="Login"
                className="auth"
                onTitleClick = { () => history.push('/auth') }
                onButtonClick= { () => history.push('/auth/sigin')}
            />
            <main className="auth__main">
                <h1 className="auth__title">Enjoy the automated online expense tracker</h1>
                <AuthForm 
                    className="auth" 
                    buttonText="Sign up"
                    functions={ functions }
                    values = { values }
                >
                    <FormGroup 
                        className="auth"
                        label="Username"
                        name="username"
                    />
                    <FormGroup 
                        className="auth"
                        label="Email"
                        type="email"
                        name="email"
                    />
                    <FormGroup 
                        className="auth"
                        label="Password"
                        type="password"
                        name="password"
                    />

                    <FormGroup 
                        className="auth"
                        label="Confirm password"
                        type="password"
                        name="password2"
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
