import { useEffect, useState } from 'react';

import { useFormFields } from './useFormFields';

const useFormControl = ( {initialValues, validation, onSubmit}) => {
    
    const { values, functions } = useFormFields( initialValues );    
    const [errors, setErrors] = useState({});
    const { handleInputChange, handleThirdPartyChange, reset } = functions;

    useEffect(() => {
        reset()
    }, [initialValues])

    const handleSubmit = (e) => {     
        e.preventDefault();  
    
        const errors = validation(values)
        setErrors( errors );
  
        if(Object.keys( errors ).length === 0){           
            onSubmit( values, reset );
            setErrors( {} );
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
