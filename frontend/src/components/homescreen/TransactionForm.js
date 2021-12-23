import { useContext } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CustomSelect from "./CustomSelect";
import  Button from '../../components/Button';
import useTransaction from "../../hooks/useTransaction";
import { TransactionContext } from "../../context/transactionContext";

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
    
    const { state:{ toModify }, dispatch } = useContext(TransactionContext);
    const {
        transactionDate,
        setTransactionDate,
        selectedOption,
        setSelectedOption,
        concept, 
        amount,
        
        handleInputChange,
        handleNewTransaction
    } = useTransaction( dispatch );

    
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
                            options={ options }
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
