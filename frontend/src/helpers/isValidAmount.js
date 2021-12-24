export const isValidAmount = ( amount, flag ) => {
    console.log(amount)

    if( flag && amount < 0 ){
        return {
            ok: false,
            message: 'Just type the value, you can not change the type of transaction'
        };
    }

    
    if( isNaN(amount) || amount.trim().length === 0 ){
        return {
            ok: false,
            message: 'Please provide a valid amount'
        };
    }

    return {
        ok: true,
        type: amount > 0 ? 'income': 'expense',
        value: Math.abs(amount)
    }
    
}

