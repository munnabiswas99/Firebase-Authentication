import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log("Google sign in clicked");
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <h3>Please Log in first</h3>
            <button onClick={handleGoogleSignIn}>Sing In With Google</button>
        </div>
    );
};

export default Login;