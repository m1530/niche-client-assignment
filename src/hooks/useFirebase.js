import initializeApplication from '../components/Login/Firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';


initializeApplication();

const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [userError, setUserError] = useState('');
    const [admin, setAdmin] = useState(false);

    // register user
    const signUpUsingEmail = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                const newUser = { email, displayName: name };
                setUser(newUser);
                setUserError('');
                alert('Registration successful.');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.push('/');
            })
            .catch((error) => {
                setUserError(error.message);
            }).finally(() => setIsLoading(false));

    }

    // login user
    const logIn = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const url = location?.state?.from || '/';
                history.push(url);
                setUserError('');
            })
            .catch((error) => {
                setUserError(error.message);
            }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }


    return {
        user, admin, isLoading, logout, userError, signUpUsingEmail, logIn
    }


}
export default useFirebase;