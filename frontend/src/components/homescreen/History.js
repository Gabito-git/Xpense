import { useContext, useEffect, useRef, useState } from "react"

import CustomSelect from "./CustomSelect"
import Transaction from "./Transaction"
import { TransactionContext } from '../../context/transactionContext'
import { options } from "./TransactionForm"
import Swal from "sweetalert2"

const optionsToUse=[
    { value: 'all', label: 'All items' },
    ...options,
]

const History = () => {

    const { state:{ transactions }} = useContext( TransactionContext );
    const [selectedOption, setSelectedOption] = useState(optionsToUse[0]);
    const [filteredTransactions, setFilteredTransactions] = useState(null);   

    useEffect(() => {
        setFilteredTransactions(null);
        setSelectedOption(optionsToUse[0])
    }, [transactions])

    useEffect(() => {

        const getFilteredTransactions = async() => {

            if( selectedOption.value === 'all' ){
                return setFilteredTransactions(null);
            }

            try {
                const response = await fetch(
                    `http://localhost:4000/api/transactions/${selectedOption.value}/category`, {
                        method: 'GET',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                    }
                )
    
                const filteredResult = await response.json();

                if(filteredResult.errors){
                    return Swal.fire(
                        'Oops...', 'Please provide a valid search category', 'error'
                    )
                }

                setFilteredTransactions( filteredResult.transactions );
                
            } catch (error) {
                console.error(error)
            }
        }

        getFilteredTransactions();

    }, [selectedOption])

    return (
        <div className="history">
            <div className="history__header">
                <h2 className="history__title">History</h2>
                <div className="history__search"> 
                    <p className="history__text">Search by category: </p>
                    <div className="history__select-field">
                        <CustomSelect 
                            selectedOption={ selectedOption }
                            setSelectedOption={ setSelectedOption }
                            options={ optionsToUse }                            
                        />
                    </div>                    
                </div>                
            </div>
            {
                (filteredTransactions || transactions).map( transaction => (
                    <Transaction
                        key={ transaction.transaction_id } 
                        style={ { color: transaction.type === 'income' ? 'green': 'red' } } 
                        {...transaction}
                    />
                ) )
            }
        </div>
    )
}

export default History
