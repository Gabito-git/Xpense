export const newTransaction = ( transaction ) => ({
    type: 'ADD_TRANSACTION',
    payload: transaction
})

export const deleteTransaction = ( transactionId ) => ({
    type: 'DEL_TRANSACTION',
    payload: transactionId
})

export const setToModify = ( transactionId ) => ({
    type: 'SET_TOMODIFY',
    payload: transactionId
})

export const updateTransaction = ( transaction ) => ({
    type: 'UPDATE_TRANSACTION',
    payload: transaction
})

export const signOutTransactions = () => ({
    type: 'SIGN_OUT_TRANSACTIONS'
})

export const setTransactions = ( transactions ) => ({
    type: 'SET_TRANSACTIONS',
    payload: transactions
})