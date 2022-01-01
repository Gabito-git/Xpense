import { useContext } from "react"
import { FormContext } from "./AuthForm"

const FormGroup = ({ className, label, type, name }) => {

    const { functions:{ handleInputChange }, values } = useContext(FormContext);
    
    return (
        <div className={ `${ className }__form-group` }>
            <label className={ `${ className }__label` }>{ label }</label>
            <div className={ `${ className }__input-div` }>
                <input 
                    className={ `${ className }__input` } 
                    type={ type }
                    name={ name }
                    value={ values[name] }
                    onChange={ handleInputChange }
                />
            </div>
        </div>
    )
}

export default FormGroup
