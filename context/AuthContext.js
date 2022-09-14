import React, { useContext, useState, useEffect, useRef } from "react";
import { auth, db } from "../config/fire";
import "firebase/compat/auth";
import { useRouter } from "next/router";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { addDoc, doc, setDoc } from "firebase/firestore";

const AuthContext = React.createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [errmsg, setErrMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [data, setData] = useState([]);
  const userInfo = useRef();
  const router = useRouter();

  // SignUp
  const signUp = (email, password, username, e) => {
    setIsLoading(true);
    setLoggingIn(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setDoc(doc(db, "users", cred.user.uid), {
          email,
          username,
          transactions: [],
        });
      })
      .then(() => {
        router.push("/Dashboard/DashboardPage");
        setIsLoading(false);
      })
      .then(e.target.reset())
      .catch((err) => {
        if (err.code === "auth/weak-password") {
          setErrMsg("password must be at least 6 characters long");
        } else setErrMsg(err.code);
        setIsLoading(false);
        setTimeout(() => {
          setErrMsg(false);
        }, 3000);
      });
    return;
  };
  // ####SignOut######
  const logOut = () => {
    setLoggingOut(true);
    signOut(auth).then(() => {
      setIsLoading(false);
      console.log("user logged out");
      router.push("/");
    });
  };
  // ####SignIn######
  const logIn = (email, password, e) => {
    setIsLoading(true);
    setLoggingIn(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        if (cred.user) {
          router.push("/Dashboard/DashboardPage");
        }
      })
      .then(e.target.reset())
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setErrMsg("invalid/wrong password");
        } else if (err.code === "auth/internal-error") {
          setErrMsg("Enter a valid password");
        } else if (err.code === "auth/user-not-found") {
          setErrMsg("You do not have an account, kindly sign up below");
        } else setErrMsg(err.code);
        setIsLoading(false);
        setTimeout(() => {
          setErrMsg(false);
        }, 3000);
      });
    return;
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    logOut,
    logIn,
    userInfo,
    errmsg,
    isLoading,
    loggingOut,
    loggingIn,
    data,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
