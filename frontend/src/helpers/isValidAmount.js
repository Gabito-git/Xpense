export const isValidAmount = ( amount ) => {
    
    if( isNaN(amount) || amount.trim().length === 0 ){
        return {ok: false};
    }

    return {
        ok: true,
        type: amount > 0 ? 'income': 'expense',
        value: Math.abs(amount)
    }
    
}

