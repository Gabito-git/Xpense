const transactionValidation = ( values ) => {

    const { concept, amount, category } = values;

    const errors = {}
    
    if( !concept.trim() ){
        errors.concept = 'Required'
    }

    if( isNaN(amount) || !amount.toString().trim() ){
        errors.amount = 'Please provide a valid amount'
    }

    if( !category ){
        errors.category = 'Required'
    }

    return errors;
}

export default transactionValidation
