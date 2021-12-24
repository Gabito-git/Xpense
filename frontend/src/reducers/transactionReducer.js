export const initState = {   
    transactions: [],
    toModify: null
}

export const transactionReducer = (state = initState, action) => {

    switch ( action.type ) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions].splice(0,10)
            }

        case 'DEL_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter( 
                    transaction => transaction.transaction_id !== action.payload
                 )
            }

        case 'SET_TOMODIFY':
            return {
                ...state,
                toModify: state.transactions.filter( 
                    t => t.transaction_id === action.payload 
                )[0]
            }

        case 'UNSET_TOMODIFY':
            return{
                ...state,
                toModify: null
            }

        case 'UPDATE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.map( tran => {
                    return tran.transaction_id === action.payload.transaction__id
                            ? action.payload
                            : tran
                } ),
                toModify: null
            }
    
        default:
            return state;
    }
    
}


