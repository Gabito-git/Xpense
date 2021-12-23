export const initState = {   
    transactions: []
}

export const transactionReducer = (state = initState, action) => {

    switch ( action.type ) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions].splice(0,10)
            }

        case 'DEL_TRANSACTION':
            console.log(action.payload)
            return {
                ...state,
                transactions: state.transactions.filter( 
                    transaction => transaction.transaction_id !== action.payload
                 )
            }
    
        default:
            return state;
    }
    
}


