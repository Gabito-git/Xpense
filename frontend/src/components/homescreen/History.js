import { useContext, useState } from "react"

import CustomSelect from "./CustomSelect"
import Transaction from "./Transaction"
import { TransactionContext } from '../../context/transactionContext'

const History = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const { state:{ transactions } } = useContext( TransactionContext );

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
                        />
                    </div>                    
                </div>                
            </div>
            {
                transactions.map( transaction => (
                    <Transaction 
                        style={ { color: transaction.type === 'income' ? 'green': 'red' } } 
                        {...transaction}
                    />
                ) )
            }
        </div>
    )
}

export default History
