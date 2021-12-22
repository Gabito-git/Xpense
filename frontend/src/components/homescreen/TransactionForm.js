import { useState } from "react";

import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import  Button from '../../components/Button';

const options = [
    { value: 'salary', label: 'Salary' },
    { value: 'interests', label: 'Interests' },
    { value: 'food', label: 'Food' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'gift', label: 'Gift' },
    { value: 'family', label: 'Family' },
    { value: 'other', label: 'Other' },
];

const customStyles = {   
    option: (styles, {  isFocused }) => {
      return {
        ...styles,            
        color: isFocused ? 'white': 'black',  
      };
    },
    control: (styles) => ({
        ...styles,
        backgroundColor: 'transparent',        
    } )  
    
};

const TransactionForm = () => {

    const [transactionDate, setTransactionDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);


    return (
        <div className="transaction-form">
            <h2 className="transaction-form__title"> New Transaction </h2>

            <form>
                <div className="transaction-form__group">
                    <label> Name </label>
                    <div className="transaction-form__input-div">
                        <input className="transaction-form__input" />
                    </div>
                </div>
                <div className="transaction-form__group">
                    <label> Amount (use "-" for expenses) </label>
                    <div className="transaction-form__input-div">
                        <input className="transaction-form__input" />
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
                            <div className="new-transaction__select-div">
                                        <Select  
                                            defaultValue={selectedOption}
                                            menuPlacement="top"
                                            onChange={setSelectedOption}                     
                                            options={ options }
                                            styles={ customStyles }
                                            theme={(theme) => ({
                                                ...theme,                                
                                                colors: {
                                                ...theme.colors,
                                                primary25: '#519259',                                  
                                                primary: '#064635',
                                                },
                                            })}
                                        />
                            </div> 
                    </div>
                </div>

                <div className="transaction-form__button-div">
                    <Button 
                        text="Add transaction"
                        className="transaction-form__button"
                    />
                </div>
                
            </form>

        </div>
    )
}

export default TransactionForm
