import React from "react";
import './Login.css'
import { UserAuth } from "../Context/AuthContext";
import {GoogleButton} from "react-google-button";
export default function Login() {
const {user, googleSignOut} = UserAuth();

    const {googleSignIn }= UserAuth();

    const handleGoogleSignIn = async(e) => {
        e.preventDefault();
try {
    await googleSignIn()
} 
catch (error) {
    console.log(error)
    }
};
    return(
        <div className="login">
            <div>

                {user?.displayName ?<div className="sign-in">
                    <div>
                    <h2>successfully signed In</h2> 
                    <h3> Welcome {user.displayName}</h3>
                    <div className="sign-in-img">
                    <img src={user.photoURL} alt="user" width="100px" height="100px" />
                    </div>
                    </div>
                    <button onClick={googleSignOut}>Sign Out</button>
                     </div>
                     :
                <div>
                     <h2>Sign In</h2> 
                     <GoogleButton onClick={handleGoogleSignIn} />
                     </div>}

      </div>
        </div>
    )
};