import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
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

    const handleSignOut = () => {
        signOut(auth).then(()=>{
            console.log("Sign Out");
            setUser(null);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <h3>Please Log in first</h3>
            {
                user ? <button onClick={handleSignOut}>Sing Out</button> : <button onClick={handleGoogleSignIn}>Sing In With Google</button>
            }
            
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