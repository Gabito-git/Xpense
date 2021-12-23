export const newTransaction = ( transaction ) => ({
    type: 'ADD_TRANSACTION',
    payload: transaction
})

export const deleteTransaction = ( id ) => ({
    type: 'DEL_TRANSACTION',
    payload: id
})