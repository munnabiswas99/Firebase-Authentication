import React from 'react';

const Login = () => {

    const handleGoogleSignIn = () => {
        console.log("Google sign in clicked");
    }
    return (
        <div>
            <h3>Please Log in first</h3>
            <button onClick={handleGoogleSignIn}>Sing In With Google</button>
        </div>
    );
};

export default Login;