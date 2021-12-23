import { useContext, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

import { TransactionContext } from "../../context/transactionContext";
import { newTransaction } from "../../actions/transactions";
import { isValidAmount } from "../../helpers/isValidAmount";
import  Button from '../../components/Button';
import { useForm } from "../../hooks/useForm";
import CustomSelect from "./CustomSelect";

const TransactionForm = () => {

    const [transactionDate, setTransactionDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const { dispatch } = useContext(TransactionContext);
    const { formState:{ concept, amount }, handleInputChange, reset } = useForm({
        concept: '',
        amount: ''
    });

    const handleNewTransaction = async(e) => {
        e.preventDefault();

        if( concept.trim().length === 0 ){
            return Swal.fire(
                'Oops...', 'Please provide a valid concept', 'error'
            )
        } 
        
        const { ok, value, type } = isValidAmount( amount );

        if( !ok ){
            return Swal.fire(
                'Oops...', 'Please provide a valid amount', 'error'
            )
        }

        if( selectedOption === null){
            return Swal.fire(
                'Oops...', 'Please provide a category', 'error'
            )
        }

        const transaction = {
            concept,
            amount: value,
            date: transactionDate,
            category: selectedOption.value,
            type
        }

        const response = await fetch( 'http://localhost:4000/api/transactions',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( transaction )
        } )

        const newDbTransaction = await response.json();

        dispatch(newTransaction( newDbTransaction ));        
        
        setSelectedOption(null);
        setTransactionDate(new Date());
        reset();
    }

    return (
        <div className="transaction-form">
            <h2 className="transaction-form__title"> New Transaction </h2>

            <form onSubmit={handleNewTransaction}>
                <div className="transaction-form__group">
                    <label> Name </label>
                    <div className="transaction-form__input-div">
                        <input 
                            className="transaction-form__input" 
                            name="concept"
                            value={ concept }
                            onChange={ handleInputChange }
                        />
                    </div>
                </div>
                <div className="transaction-form__group">
                    <label> Amount (use "-" for expenses) </label>
                    <div className="transaction-form__input-div">
                        <input 
                            className="transaction-form__input" 
                            name="amount"
                            value={ amount }
                            onChange={ handleInputChange }
                        />
                    </div>
                </div>
                <div className="transaction-form__group">
                    <label> Date </label>
                    <div className="transaction-form__date-div">
                        <DatePicker 
                            selected={transactionDate} 
                            onChange={(date) => setTransactionDate(date)} 
                            className="transaction-form__date"
                        />
                    </div>
                </div>

                <div className="transaction-form__group">
                    <label> Category </label>
                    <div className="transaction-form__date-div">
                        <CustomSelect 
                            selectedOption={ selectedOption }
                            setSelectedOption = { setSelectedOption }
                        /> 
                    </div>
                </div>

                <div className="transaction-form__button-div">
                    <Button 
                        text="Add transaction"
                        className="transaction-form__button"
                        type="submit"
                    />
                </div>                
            </form>

        </div>
    )
}

export default TransactionForm
