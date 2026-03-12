import React from 'react'
import { AuthContext } from './AuthContext'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'
import { useState } from 'react'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut=()=>{
    return signOut(auth);
 }

 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const authInfo = {
    registerUser,
    signInUser,
    logOut,
    user,
    loading,
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}
