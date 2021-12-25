import { newTransaction, updateTransaction } from "../actions/transactions";

export const transactionExec = async(values, dispatch, reset ) => {
    const { concept, amount, date, category, transaction_id } = values;
    let url, method, type;    
    
    if( transaction_id ){
        url    = `http://localhost:4000/api/transactions/${ transaction_id }`
        method = 'PUT'
        type   = values.type
    }else{
        url    = 'http://localhost:4000/api/transactions';
        method = 'POST'
        type   = amount > 0 ? 'income' : 'expense'
    }

    const transaction = {
        concept, 
        amount: Math.abs(amount),
        date,
        category: category.value,
        type
    }

    const response = await fetch(url, {
        method,
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( transaction )
    })

    const newTransactionDb = await response.json();

    if( transaction_id ){
        dispatch( updateTransaction( newTransactionDb ) )
    }else{
        dispatch(newTransaction( newTransactionDb ) );
        reset();
    }    
}