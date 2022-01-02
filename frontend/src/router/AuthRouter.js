import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import SinginScreen from '../screens/SinginScreen';
import SingupScreen from '../screens/SingupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AuthRouter = () => {
    return (
        <Switch>

            <Route exact path="/auth/" component={ WelcomeScreen } />
            <Route exact path="/auth/signin" component={ SinginScreen } />
            <Route exact path="/auth/signup" component={ SingupScreen } />
            <Redirect to="/auth" />

        </Switch>
    )
}

export default AuthRouter
