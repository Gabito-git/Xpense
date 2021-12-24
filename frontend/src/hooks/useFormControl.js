import { useEffect, useState } from 'react';

import { useFormFields } from './useFormFields';

const useFormControl = ( {initialValues, transactionValidation, funct, dispatch}) => {
    
    const { values, functions } = useFormFields( initialValues );    
    const [errors, setErrors] = useState(null);
    const { handleInputChange, handleThirdPartyChange, reset } = functions;

    useEffect(() => {
        reset()
    }, [initialValues])

    const handleSubmit = (e) => {     
        e.preventDefault();  
        
        setErrors( transactionValidation( values ) );
        if(!errors){
            funct( values, dispatch, reset );
            setErrors( null );
        }
    }
 
    return{
        values,
        errors,
        functions:{
            handleInputChange,
            handleThirdPartyChange,
            handleSubmit,
            reset
        }
    }

}

export default useFormControl
