import { useContext, useEffect } from 'react';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';
import { finishChecking, setCurrentUser } from '../actions/auth';

import { AuthContext } from '../context/authContext';
import fetchHelper from '../helpers/fetchHelper';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoutes';
import HomeScreen from '../screens/HomeScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {

    const { state, dispatch } = useContext( AuthContext );
    const { checking, currentUser } = state;

    useEffect(() => {
       const getCurrentUser = async() => {
           const response = await fetchHelper({
               url:'users/currentuser',
               method: 'get',
           })

           const currentUser = await response.json();
           dispatch(setCurrentUser( currentUser.currentUser ))
           dispatch( finishChecking() )
       }

       getCurrentUser();
    }, [])

    if( state.checking ){
        return <h1>....Checking</h1>
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        component={ AuthRouter }
                        isAuthenticated={!!currentUser}
                        path="/auth"
                    />

                    <PrivateRoute 
                        component={ HomeScreen }
                        isAuthenticated={ !!currentUser }
                        exact
                        path="/"
                    />

                    <Redirect to="/auth/signin" />
                    
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
