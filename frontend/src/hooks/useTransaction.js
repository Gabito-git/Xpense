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

    useLayoutEffect(() => {
        toModify && reset()       
    }, [toModify])

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
