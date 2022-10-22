import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false);
    // jwt token
    const [token, setToken] = useState('');

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                const newUser = { email, displayName: name }
                setUser(newUser);

                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // console.log(error.message)
                });
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
        ;
    }


    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;



                const redirect_url = location?.state?.from || '/home';
                history(redirect_url);
                // console.log(redirect_url)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    const logout = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // user login er por multipage a thakte pare log out hote pare tai sob page theke log out hoyar jonno eita use hoy
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
                // jwt token
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubscribe
    }, [])


    const googleSignin = (location, history) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;

                // save user to the database
                // saveUserg(user.email, user.displayName);
                saveUser(user.email, user.displayName, 'PUT');

                // console.log(user)
                const redirect_url = location?.state?.from || '/home';
                history(redirect_url);
                // console.log(redirect_url)
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message)
            });
    }

    // user ke database a save korar jonno

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://doctor-portal006.herokuapp.com/userInfo', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

            .then()
    }

    // admin chack

    useEffect(() => {
        fetch(`https://doctor-portal006.herokuapp.com/userInfo/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin)

            )

    }, [user.email])


    return {
        user,
        registerUser,
        admin,
        logout,
        loginUser,
        googleSignin,
        isLoading,
        authError,
        token,

    }

}
export default useFirebase;