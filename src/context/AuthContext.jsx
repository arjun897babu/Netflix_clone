import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { auth, db } from '../services/firebase'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

  const [user, setUser] = useState({});

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })

    return () => {
      unSubscribe()
    }

  }, [])

  async function signUp(email, password) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      setDoc(doc(db, 'users', email), {
        favShows: [],
      })
      return
    } catch (error) {
      throw error
    }
  } 

  async function logIn(email, password) {
    try {
     await signInWithEmailAndPassword(auth, email, password)
      return
    } catch (error) {
      throw error
    }
  }

  function logOut() {
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function UserAuth() {
  return useContext(AuthContext)
}