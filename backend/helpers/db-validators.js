const allowedData = (value = "", values=[]) => {
    const isIncluded = values.includes( value );

    if( !isIncluded ){
        throw new Error(`The transaction type/category ${value} is not allowed, ${values}`);
    }

    return true;
}

module.exports = {
    allowedData
}