import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import { TransactionContext } from "../context/transactionContext";
import fetchHelper from "../helpers/fetchHelper";

const useSearch = ( optionsToUse ) => {
    const { state:{ transactions }} = useContext( TransactionContext );
    const [selectedOption, setSelectedOption] = useState(optionsToUse[0]);
    const [filteredTransactions, setFilteredTransactions] = useState(null);   

    useEffect(() => {
        setFilteredTransactions(null);
        setSelectedOption(optionsToUse[0])
    }, [transactions, optionsToUse])

    useEffect(() => {

        const getFilteredTransactions = async() => {

            if( selectedOption.value === 'all' ){
                return setFilteredTransactions(null);
            }

            try {
                const response = await fetchHelper({
                    url: `transactions/${selectedOption.value}/category`,
                    method: 'get'
                })
                    
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

    return{
        transactions,
        selectedOption,
        filteredTransactions,

        setSelectedOption,
    }
}

export default useSearch
