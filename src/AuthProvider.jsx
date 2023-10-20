import auth from "./Firebase-config";
import { data } from "autoprefixer";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const Context = createContext(null)
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [wait, setWait] = useState(true);
    const [loading, setLoading] = useState(true)
    const [toast, SetToast] = useState(null)
    const [location, setlocation] = useState("")
    const [cart, setCart] = useState(null)
    const [runtime, setRunTime] = useState(false)

    const loginWithEmail = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }


    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const google = () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const gitHub = () => {
        setLoading(true)
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }




    useEffect(() => {
        if (wait) {
            onAuthStateChanged(auth, (USER) => {
                setUser(USER)
                setLoading(false)


            })
            return
        }

        else {
            onAuthStateChanged(auth, (USER) => {
                setUser(USER)
                setLoading(false)


            })
            return
        }
    }, [wait])

    useEffect(() => {
        if (user) {
            fetch(`https://assignment-10-server-7tiwld456-sakibs-projects-d783f29e.vercel.app/${user?.email}`)
                .then(res => res.json())
                .then(data => setCart(data))
            return
        }

    }, [user])



    const item = { loginWithEmail, createUser, logOut, google, gitHub, user, setUser, setWait, wait, toast, SetToast, location, setRunTime, runtime, setlocation, loading, cart, setCart }

    return (
        <Context.Provider value={item}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;