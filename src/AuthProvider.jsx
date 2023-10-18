import auth from "./Firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const Context = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [wait, setWait] = useState(true);
    const [toast, SetToast] = useState(null)

    const loginWithEmail = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }


    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        if (wait) {
            onAuthStateChanged(auth, (USER) => {
                setUser(USER)

            })
            return
        }

        else {
            onAuthStateChanged(auth, (USER) => {
                setUser(USER)

            })
            return
        }
    }, [wait])

    console.log(user?.displayName)
    const item = { loginWithEmail, createUser, logOut, user, setUser, setWait, wait, toast, SetToast }

    return (
        <Context.Provider value={item}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;