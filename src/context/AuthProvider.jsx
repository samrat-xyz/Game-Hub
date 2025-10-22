import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userInfo = {
    createUser,
    loginUser,
    googleLogin,
    user,
    loading
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
