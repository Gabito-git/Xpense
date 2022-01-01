import { createContext } from "react"
import Button from "../Button"

export const FormContext = createContext();
const { Provider } = FormContext;

const AuthForm = ({className, children, buttonText, functions, values}) => {

    return (
        <Provider value={{ functions, values }}>
            <form 
                className={ `${ className }__form` }
                onSubmit={ functions.onSubmit }
            >
                { children }
                <div className={`${ className }__button-div`}>
                    <Button 
                    text={ buttonText }
                    type="submit"
                    className={`${className}__button`}
                    />
                </div>
            </form>   
        </Provider>

        
    )
}

export default AuthForm
