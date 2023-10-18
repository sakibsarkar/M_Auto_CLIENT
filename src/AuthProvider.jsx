import auth from "./Firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const Context = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [wait, setWait] = useState(true)

    const loginWithEmail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }


    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)

        })
    }, [wait])

    const item = { loginWithEmail, createUser, user }

    return (
        <Context.Provider value={item}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;