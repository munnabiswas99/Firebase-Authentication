import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () => {
        console.log("Google sign in clicked");
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <h3>Please Log in first</h3>
            <button onClick={handleGoogleSignIn}>Sing In With Google</button>
            {
                user && <div>
                    <p>Name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;