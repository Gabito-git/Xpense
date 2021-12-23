export const newTransaction = ( transaction ) => ({
    type: 'ADD_TRANSACTION',
    payload: transaction
})

export const deleteTransaction = ( id ) => ({
    type: 'DEL_TRANSACTION',
    payload: id
})

export const setToModify = ( transactionId ) => ({
    type: 'SET_TOMODIFY',
    payload: transactionId
})

export const unsetToModify = ( ) => ({
    type: 'UNSET_TOMODFY'
})