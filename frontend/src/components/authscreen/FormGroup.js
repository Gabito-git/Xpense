const FormGroup = ({ className, label, type }) => {
    return (
        <div className={ `${ className }__form-group` }>
            <label className={ `${ className }__label` }>{ label }</label>
            <div className={ `${ className }__input-div` }>
                <input 
                    className={ `${ className }__input` } 
                    type={ type }
                />
            </div>
        </div>
    )
}

export default FormGroup
