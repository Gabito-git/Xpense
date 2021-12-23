export const initState = {   
    transactions: []
}

export const transactionReducer = (state = initState, action) => {

    switch ( action.type ) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }

        case 'DEL_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter( 
                    transaction => transaction.id !== action.payload
                 )
            }
    
        default:
            return state;
    }
    
}


