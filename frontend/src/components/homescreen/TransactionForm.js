
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import  Button from '../../components/Button';
import CustomSelect from "./CustomSelect";
import useFormControl from "../../hooks/useFormControl";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { TransactionContext } from "../../context/transactionContext";
import transactionValidation from "../../helpers/transactionValidation";
import { newTransaction } from "../../actions/transactions";

export const options = [
    { value: 'salary', label: 'Salary' },
    { value: 'interests', label: 'Interests' },
    { value: 'food', label: 'Food' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'gift', label: 'Gift' },
    { value: 'family', label: 'Family' },
    { value: 'other', label: 'Other' },
];

// const initialValues ={
//     concept: '',
//     amount: '',
//     date: new Date(),
//     category: null
// }

const funct = async(values, dispatch, reset) => {
    const { concept, amount, date, category } = values;
    
    const transaction = {
        concept, 
        amount: Math.abs(amount),
        date,
        category: category.value,
        type: amount > 0 ? 'income' : 'expense'
    }

    const response = await fetch('http://localhost:4000/api/transactions', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( transaction )
    })

    const newTransactionDb = await response.json();

    dispatch(newTransaction( newTransactionDb ) );
    reset();
}

const TransactionForm = () => {

    const { state: { toModify }, dispatch } = useContext(TransactionContext);
    const [initialValues, setInitialValues] = useState({
        concept: '',
        amount: '',
        date: new Date(),
        category: null
    })

    const { 
        values, 
        errors, 
        functions } = useFormControl( {initialValues, transactionValidation, funct, dispatch} )   

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
