import { useState } from 'react';


export const useFormFields = ( initialState = {} ) => {

    const [formState, setFormState] = useState( initialState );    

    const reset = () => {
        setFormState( initialState );
    }

    const handleInputChange = ( {target: {name, value}} )=>{
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleThirdPartyChange = ( name, value  ) => {
        
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

//    console.log( formState );

    return {

        values: formState,
        functions:{
            handleInputChange, 
            handleThirdPartyChange,
            reset
        }      

    }       
    
};