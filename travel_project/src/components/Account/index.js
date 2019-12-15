import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
    <div>
        <h1>Account Pages</h1>
        <PasswordForgetForm/>
        <PasswordChangeForm/>
    </div>
);

const Account = () => (
    <div>
        <h1>Account</h1>
    </div>
);

export default Account;