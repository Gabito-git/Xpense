export const initState = {
    incomes: 0,
    expenses: 0,
    total: 0,
    transactions: []
}

export const transactionReducer = (state = initState, action) => {

    switch ( action.type ) {
        case 'ADD_TRANSACTION':
            const total = action.payload.type === 'income'
                            ? state.total + action.payload.amount
                            : state.total - action.payload.amount
            return{
                ...state,
                incomes: action.payload.type === 'income' 
                            ? state.incomes + action.payload.amount 
                            : state.incomes,
                expenses: action.payload.type === 'expense' 
                ? state.expenses + action.payload.amount 
                : state.expenses,
                total,
                transactions: [action.payload, ...state.transactions].splice(0,10)
            }
    
        default:
            return state;
    }
    
}


