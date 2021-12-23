const initState = {
    incomes: 0,
    expenses: 0,
    total: 0,
    transactions: []
}

const transactionReducer = (state = initState, action) => {

    switch ( action.type ) {
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
    
        default:
            return state;
    }
    
}

export default transactionReducer
