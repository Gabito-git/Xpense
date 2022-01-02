import { useContext } from 'react';
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';

import { AuthContext } from '../context/authContext';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoutes';
import HomeScreen from '../screens/HomeScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {

    const { state, dispatch } = useContext( AuthContext );
    const { checking, currentUser } = state;

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
