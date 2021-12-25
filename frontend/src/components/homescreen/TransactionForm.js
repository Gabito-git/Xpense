import { useContext, useEffect, useRef, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import  Button from '../../components/Button';
import CustomSelect from "./CustomSelect";
import useFormControl from "../../hooks/useFormControl";
import { TransactionContext } from "../../context/transactionContext";
import transactionValidation from "../../helpers/transactionValidation";
import { newTransaction, updateTransaction } from "../../actions/transactions";

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

const funct = async(values, dispatch, reset ) => {
    const { concept, amount, date, category, transaction_id } = values;
    let url, method, type;    
    
    if( transaction_id ){
        url    = `http://localhost:4000/api/transactions/${ transaction_id }`
        method = 'PUT'
        type   = values.type
    }else{
        url    = 'http://localhost:4000/api/transactions';
        method = 'POST'
        type   = amount > 0 ? 'income' : 'expense'
    }

    const transaction = {
        concept, 
        amount: Math.abs(amount),
        date,
        category: category.value,
        type
    }

    const response = await fetch(url, {
        method,
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( transaction )
    })

    const newTransactionDb = await response.json();

    if( transaction_id ){
        dispatch( updateTransaction( newTransactionDb ) )
    }else{
        dispatch(newTransaction( newTransactionDb ) );
        reset();
    }
    
}

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
        onSubmit: funct, 
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
