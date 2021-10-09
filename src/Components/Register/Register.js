import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" />
                <br />
                <input type="email" />
                <br />
                <input type="submit" value="submit" />
                <br />
                <Link to="/login">Already register</Link>
            </form>
        </div>
    );
};

export default Register;