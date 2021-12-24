import { useContext, useEffect, useLayoutEffect, useState } from "react";

import Swal from "sweetalert2";

import { TransactionContext } from "../context/transactionContext";
import { newTransaction } from "../actions/transactions";
import { useForm } from "./useForm";
import { isValidAmount } from "../helpers/isValidAmount";

const useTransaction = () => {

    const [transactionDate, setTransactionDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState(null);
    const {state: { toModify } ,dispatch } = useContext(TransactionContext);
    const { formState:{ concept, amount }, handleInputChange, reset } = useForm({
        concept: toModify?.concept || '',
        amount: toModify?.amount || ''
    });

    useEffect(() => {
        if( toModify ){
            reset()
            setSelectedOption( setCategoryToModify( toModify.category ) )
            setTransactionDate( new Date(toModify.date) )
        }       
    }, [toModify])

    const setCategoryToModify = ( value ) => {
        const [first,...rest] =  value.split('');
        const label = [first.toUpperCase(), ...rest].join('');

        return { value, label }
    }

    const handleNewTransaction = async(e) => {
        e.preventDefault();

        if( concept.trim().length === 0 ){
            return Swal.fire(
                'Oops...', 'Please provide a valid concept', 'error'
            )
        } 
        const flag = toModify ? true: false;
        const { ok, message, value, type } = isValidAmount( amount, flag);

        if( !ok ){
            return Swal.fire(
                'Oops...', message, 'error'
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

    return{
        transactionDate,
        setTransactionDate,
        selectedOption,
        setSelectedOption,
        concept, 
        amount,

        handleInputChange,
        handleNewTransaction
    }

}

export default useTransaction
