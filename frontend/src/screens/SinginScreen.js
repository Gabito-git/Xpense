import { useHistory } from 'react-router-dom'
import { useContext } from 'react'

import AuthForm from "../components/authscreen/AuthForm"
import FormGroup from "../components/authscreen/FormGroup"
import Navbar from "../components/Navbar"
import money from '../assets/money.png'
import useFormControl from '../hooks/useFormControl'
import authFormValidation from '../helpers/authFormValidation'
import signinExec from '../helpers/signinExec'
import { AuthContext } from '../context/authContext'

const initialValues = {
    email: '',
    password: ''
}

const SinginScreen = () => {
    
    const history = useHistory();
    const { dispatch } = useContext(AuthContext);
    const { values, errors, functions } = useFormControl({
        initialValues,
        validation: authFormValidation,
        onSubmit: ( values, reset ) => signinExec( values, reset, dispatch )
    })

    return (
        <div className="auth">
            <Navbar 
                buttonText="Sign up"
                className="auth"
                onTitleClick = { () => history.push('/auth') }
                onButtonClick={ () => history.push('/auth/signup')}
            />
            <main className="auth__main">
                <h1 className="auth__title">Experience a fresh way to manage money</h1>
                <AuthForm
                    className="auth" 
                    buttonText="Sign in"
                    functions={ functions }
                    values={ values }
                >
                    <FormGroup
                        className="auth"
                        label="Email"
                        type="email"
                        name="email"
                    />
                    { errors?.email && <div style={ {color: 'red'} }>{ errors.email }</div> }
                    <FormGroup 
                        className="auth"
                        label="Password"
                        type="password"
                        name="password"
                    />
                    { errors?.password && <div style={ {color: 'red'} }>{ errors.password }</div> }
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
