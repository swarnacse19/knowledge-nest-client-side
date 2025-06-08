import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);
function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
      };
    const logOut = () => {
        return signOut(auth);
      };

      const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
      };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUser,
        resetPassword,
        signInWithGoogle
    };
  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}

export default AuthProvider;