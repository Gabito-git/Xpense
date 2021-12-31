const FormGroup = ({ className, label, inputType }) => {
    return (
        <div className={ `${ className }__form-group` }>
            <label className={ `${ className }__label` }>{ label }</label>
            <div className={ `${ className }__input-div` }>
                <input 
                    className={ `${ className }__input` } 
                    type={ inputType }
                />
            </div>
        </div>
    )
}

export default FormGroup
