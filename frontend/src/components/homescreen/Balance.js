import { useContext } from "react"
import { TransactionContext } from "../../context/transactionContext"

const Balance = () => {
    const { state: { transactions } } = useContext(TransactionContext);
    console.log(transactions)
    let incomes = 0, expenses = 0  

    transactions.forEach( transaction => {
        if( transaction.type === 'income' ){
            incomes += transaction.amount
        }else{
            expenses += transaction.amount
        }
    } )

    const total = incomes - expenses

    return (
        <div className="balance">
            <div className="balance__top">
                <div className="balance__trans-info balance__trans-info--income">
                    <h2>INCOMES</h2>
                    <p>USD<span> { incomes }</span></p>
                </div>
                <div className="balance__trans-info balance__trans-info--expense">
                    <h2>EXPENSES</h2>
                    <p>USD<span> { expenses }</span></p>
                </div>
            </div>
            <div className="balance__bottom">
                <div className="balance__trans-info balance__trans-info--total">
                   <h2>USD { total }</h2>
                   <p>Total Balance</p>
                </div>
            </div>
            
        </div>
    )
}

export default Balance
