import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {singnInUsingGithub, signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={singnInUsingGithub}>Github Log in</button>
            <br />
            <button onClick={signInUsingGoogle}>Google Log in</button>
            <br />
            <Link to='/register'>New User</Link>
        </div>
    );
};

export default Login;