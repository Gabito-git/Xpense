import { useEffect, useState } from 'react';

import { useFormFields } from './useFormFields';

const useFormControl = ( {initialValues, validation, onSubmit, dispatch}) => {
    
    const { values, functions } = useFormFields( initialValues );    
    const [errors, setErrors] = useState({});
    const { handleInputChange, handleThirdPartyChange, reset } = functions;

    useEffect(() => {
        reset()
    }, [initialValues])

    const handleSubmit = (e) => {     
        e.preventDefault();  
        
        setErrors( validation( values ) );
        if(!errors){            
            onSubmit( values, dispatch, reset );
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
