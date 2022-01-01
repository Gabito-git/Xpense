import { setCurrentUser } from "../actions/auth";
import fetchHelper from "./fetchHelper";

const signupExec = async( values, reset, dispatch ) => {

    const { username, email, password } = values;

    const user = {
        username,
        email,
        password
    }

    const response = await fetchHelper({
        url: 'users/signup',
        method: 'post',
        body: user
    })

    const currentUser = await response.json();

    dispatch(setCurrentUser( currentUser ))

}

export default signupExec;