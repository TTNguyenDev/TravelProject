import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import QuizPage from '../Quiz';
import BlogPage from '../Blog';
import VungTauPage from '../Destination/VungTau'
import Notfound from '../Updatelater'

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Navigation/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route path={ROUTES.ADMIN} component={AdminPage} />
            <Route path={ROUTES.QUIZ} component={QuizPage} />
            <Route path={ROUTES.BLOG} component={BlogPage} />
            <Route path={ROUTES.VUNGTAU} component={VungTauPage} />
            <Route path={ROUTES.UPDATELATER} component={Notfound} />
        </div>
    </Router>

);

export default withAuthentication(App);