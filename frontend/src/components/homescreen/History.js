import CustomSelect from "./CustomSelect"
import Transaction from "./Transaction"
import { options } from "./TransactionForm"
import useSearch from "../../hooks/useSearch"

const optionsToUse=[
    { value: 'all', label: 'All items' },
    ...options,
]

const History = () => {

    const {
        transactions,
        selectedOption,
        filteredTransactions,        
        setSelectedOption,
    } = useSearch( optionsToUse )

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
