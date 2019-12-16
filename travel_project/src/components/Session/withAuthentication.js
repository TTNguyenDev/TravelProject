import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes'; 
import { withAuthorization } from '../Session';

const withAuthentication = condition => Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if(!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
           return (
               <Component {...this.props}/>
           );
        }
    }
    return compose(
        withRouter, 
        withFirebase
    )(withAuthorization);
};

export default withAuthentication;