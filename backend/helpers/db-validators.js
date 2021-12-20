const allowedTypes = (type = "", types=[]) => {
    const isIncluded = types.includes( type );

    if( !isIncluded ){
        throw new Error(`The transaction type ${type} is not allowed, ${types}`);
    }

    return true;
}

module.exports = {
    allowedTypes
}