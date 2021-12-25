import { useContext, useEffect, useRef, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import  Button from '../../components/Button';
import CustomSelect from "./CustomSelect";
import useFormControl from "../../hooks/useFormControl";
import { TransactionContext } from "../../context/transactionContext";
import transactionValidation from "../../helpers/transactionValidation";
import { transactionExec } from "../../helpers/transactionExec";

export const options = [
    { value: 'salary', label: 'Salary' },
    { value: 'interests', label: 'Interests' },
    { value: 'food', label: 'Food' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'gift', label: 'Gift' },
    { value: 'family', label: 'Family' },
    { value: 'other', label: 'Other' },
];

const TransactionForm = () => {

    const { state: { toModify }, dispatch } = useContext(TransactionContext);
    const isMounted = useRef(false);

    const [initialValues, setInitialValues] = useState({
        concept: '',
        amount: '',
        date: new Date(),
        category: null
    })

    const { values, errors,  functions } = useFormControl( {
        initialValues, 
        validation: transactionValidation, 
        onSubmit: transactionExec, 
        dispatch
    } )   
        
    useEffect(() => {
        if( toModify ){
            setInitialValues({
                ...toModify,
                date: new Date(toModify.date),
                category: options.filter( opt => opt.value === toModify.category)[0]
            })            
        }
    }, [ toModify ])

    useEffect(() => {
        if( isMounted && !toModify ){
            setInitialValues({
                concept: '',
                amount: '',
                date: new Date(),
                category: null
            })
        }
    }, [isMounted, toModify])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return (
        <div className="transaction-form">
            <h2 className="transaction-form__title"> 
                { toModify ? 'Modify Transaction': 'New Transaction' }
            </h2>

            <form onSubmit={ functions.handleSubmit }>
                <div className="transaction-form__group">
                    <label> Name </label>
                    <div className="transaction-form__input-div">
                        <input 
                            className="transaction-form__input" 
                            name="concept"
                            value={ values.concept }
                            onChange={ functions.handleInputChange }
                        />
                    </div>
                    { errors?.concept && <div style={ {color: 'red'} }>{ errors.concept }</div> }
                </div>
                <div className="transaction-form__group">
                    <label> 
                        { toModify ? 'Amount': 'Amount (use "-" for expenses)' }                        
                    </label>
                    <div className="transaction-form__input-div">
                        <input 
                            className="transaction-form__input" 
                            name="amount"
                            value={ values.amount }
                            onChange={ functions.handleInputChange }
                        />
                    </div>
                    { errors?.amount && <div style={ {color: 'red'}}>{ errors.amount }</div> }
                </div>
                <div className="transaction-form__group">
                    <label> Date </label>
                    <div className="transaction-form__date-div">
                        <DatePicker 
                            selected={ values.date } 
                            onChange={(date) => functions.handleThirdPartyChange( 'date', date ) } 
                            className="transaction-form__date"
                        />
                    </div>
                </div>

                <div className="transaction-form__group">
                    <label> Category </label>
                    <div className="transaction-form__date-div">
                        <CustomSelect 
                            value={ values.category }
                            onChange = { ( data ) => functions.handleThirdPartyChange('category', data) }
                            options={ options }
                        /> 
                    </div>
                    { errors?.category && <div style={ {color: 'red'}}>{ errors.category }</div> }
                </div>

                <div className="transaction-form__button-div">
                    <Button 
                        text={ toModify ? 'Update': 'Add Transaction' }
                        className="transaction-form__button"
                        type="submit"
                    />
                </div>                
            </form>

        </div>
    )
}

export default TransactionForm
