import initializeApplication from '../components/Login/Firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState, useEffect } from 'react';


initializeApplication();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [userError, setUserError] = useState('');
    const [admin, setAdmin] = useState(false);


    // google sign in
    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUserinGoogleLogin(user.email, user.displayName);
                const url = location?.state?.from || '/';
                history.push(url);
                setUserError('');
            }).catch((error) => {
                setUserError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // register user
    const signUpUsingEmail = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUserInEmailLogin(email, name)
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

    // load admin

    useEffect(() => {
        fetch(`https://nameless-journey-27300.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user?.email]);

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

    // check auth state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    // logout option
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }

    // save user in database from email password login
    const saveUserInEmailLogin = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://nameless-journey-27300.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    // save user in database from google login
    const saveUserinGoogleLogin = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://nameless-journey-27300.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user, admin, isLoading, logout, userError, signUpUsingEmail, logIn, googleSignIn,
    }


}
export default useFirebase;