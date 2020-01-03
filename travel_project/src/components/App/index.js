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
import NhaTrangPage from '../Destination/NhaTrang'
import HaNoiPage from '../Destination/HaNoi'
import DaLatPage from '../Destination/DaLat'
import Notfound from '../Updatelater'
import VungTauPageBlog from '../viewBlog/VungTau'
import NhaTrangPageBlog from '../viewBlog/NhaTrang'
import HaNoiPageBlog from '../viewBlog/HaNoi'
import DaLatPageBlog from '../viewBlog/DaLat'
import VungTauPagePromotion from '../Promotion/VungTau'
import NhaTrangPagePromotion from '../Promotion/NhaTrang'
import HaNoiPagePromotion from '../Promotion/HaNoi'
import DaLatPagePromotion from '../Promotion/DaLat'

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
            <Route path={ROUTES.NHATRANG} component={NhaTrangPage} />
            <Route path={ROUTES.HANOI} component={HaNoiPage} />
            <Route path={ROUTES.DALAT} component={DaLatPage} />
            <Route path={ROUTES.UPDATELATER} component={Notfound} />
            <Route path={ROUTES.VUNGTAUVIEWBLOG} component={VungTauPageBlog} />
            <Route path={ROUTES.NHATRANGVIEWBLOG} component={NhaTrangPageBlog} />
            <Route path={ROUTES.HANOIVIEWBLOG} component={HaNoiPageBlog} />
            <Route path={ROUTES.DALATVIEWBLOG} component={DaLatPageBlog} />
            <Route path={ROUTES.VUNGTAUPROMOTION} component={VungTauPagePromotion} />
            <Route path={ROUTES.NHATRANGPROMOTION} component={NhaTrangPagePromotion} />
            <Route path={ROUTES.HANOIPROMOTION} component={HaNoiPagePromotion} />
            <Route path={ROUTES.DALATPROMOTION} component={DaLatPagePromotion} />
        </div>
    </Router>

);

export default withAuthentication(App);