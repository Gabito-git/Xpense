import Button from "../Button"

const AuthForm = ({className, children, buttonText}) => {
    return (
        <form className={ `${ className }__form` }>
            { children }
            <div className={`${ className }__button-div`}>
                <Button 
                text={ buttonText }
                type="submit"
                className={`${className}__button`}
                />
            </div>
    
        </form>
    )
}

export default AuthForm
