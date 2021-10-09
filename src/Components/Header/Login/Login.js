import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle, singnInUsingGithub} = useFirebase();
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