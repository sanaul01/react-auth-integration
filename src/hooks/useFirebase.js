import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user
            console.log(user);
            setUser(user);
        })
        .catch(error =>{
            setError(error.message)
        });
    };
    const singnInUsingGithub = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const user = result.user
            console.log(user);
            setUser(user);
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    };

    useEffect(() =>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside state change', user);
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        singnInUsingGithub,
        logOut
    }
}

export default useFirebase;