import { newTransaction, updateTransaction } from "../actions/transactions";
import fetchHelper from "./fetchHelper";

export const transactionExec = async(values, dispatch, reset ) => {
    const { concept, amount, date, category, transaction_id } = values;
    let url, method, type;    
    
    if( transaction_id ){
        url    = `transactions/${ transaction_id }`
        method = 'put'
        type   = values.type
    }else{
        url    = 'transactions';
        method = 'post'
        type   = amount > 0 ? 'income' : 'expense'
    }

    const transaction = {
        concept, 
        amount: Math.abs(amount),
        date,
        category: category.value,
        type
    }

    const response = await fetchHelper({
        url,
        method,
        body: transaction
    })

    const newTransactionDb = await response.json();

    if( transaction_id ){
        dispatch( updateTransaction( newTransactionDb ) )
    }else{
        dispatch(newTransaction( newTransactionDb ) );
        reset();
    }    
}