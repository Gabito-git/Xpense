import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from 'react-router-dom';

import HomeScreen from '../screens/HomeScreen';
import SinginScreen from '../screens/SinginScreen';
import SingupScreen from '../screens/SingupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <Route exact path="/auth/" component={ WelcomeScreen } />

                    <Route exact path="/auth/signin" component={ SinginScreen } />
                    <Route exact path="/auth/signup" component={ SingupScreen } />
                    <Route exact path="/" component={ HomeScreen } />

                    <Redirect to="/auth/signin" />
                    
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
