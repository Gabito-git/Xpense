import Button from "./Button"

const AuthForm = ({className, children, buttonText}) => {
    return (
        <form className={ `${ className }__form` }>
            { children }
            <Button 
              text={ buttonText }
              type="submit"
              className={`${className}__button`}
            />
    
        </form>
    )
}

export default AuthForm
