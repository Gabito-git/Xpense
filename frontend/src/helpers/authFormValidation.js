const authFormValidation = ( values ) => {

    const errors = {};
    const regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if( values.username?.trim().length === 0 ){
        errors.username = 'Please provide a username';
    }

    if( !regEmail.test(values.email.trim())){
        errors.email = 'Please provide a valid email'
    }

    if( !values.password.trim() ){
        errors.password = 'Please provide a password' 
    }

    if( values.password2 && (values.password2.trim() !== values.password.trim())){
        errors.password2 = 'Passwords must match'
    }

    return errors;
}

export default authFormValidation;