import { useContext,createContext, useEffect } from "react";
import {GoogleAuthProvider,
    signInWithRedirect,
      signOut,
      onAuthStateChanged, 
    } from "firebase/auth";
import { auth } from "../config/index";
import { useState, } from "react";

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
 
const [user, setUser] = useState({});

const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
};

const googleSignOut = () => {
    signOut(auth);
};

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
setUser(currentUser);
console.log('User', currentUser)
    });
    return () => unsubscribed()
}, []);


  return (
    <authContext.Provider value={{ googleSignIn,googleSignOut,user }}>
        {children}
        </authContext.Provider>
  );
};

  export const UserAuth = () => {
    return useContext(authContext);
  };
