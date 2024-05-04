import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [loader, setLoader]=useState(true);
    const [user, setUser]=useState(null);
    // createUser
    const createuser=(email, password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // singIn
    const signIn=(email, password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut
    const signOUT=()=>{
        setLoader(true);
        return signOut(auth);
    }

    // observing
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser)=>{
            setLoader(false);
            setUser(currentUser);
            console.log("observing", currentUser);
        });
        return(()=>{
            unsubscribe();
        })
    },[])

    const authInfo={
        createuser,
        signIn,
        signOUT,
        loader,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;