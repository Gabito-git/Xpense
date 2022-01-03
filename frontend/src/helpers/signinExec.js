import Swal from "sweetalert2";

import { setCurrentUser } from "../actions/auth";
import fetchHelper from "./fetchHelper";

const signinExec = async( values, reset, dispatch ) => {

    const { email, password } = values;

    const user = {
        email,
        password
    }

    try {
        const response = await fetchHelper({
            url: 'users/signin',
            method: 'post',
            body: user
        })
    
        const currentUser = await response.json();
        if(currentUser.errors){
            return Swal.fire(
                'Oops...', currentUser.errors[0].message, 'error'
            )
        }
    
        dispatch(setCurrentUser( currentUser ))
        
    } catch (error) {
        Swal.fire("Oops...", error.message, "error")
    }

}

export default signinExec;