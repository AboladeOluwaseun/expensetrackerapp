import React, { useContext, useState, useEffect, useRef } from "react";
import { auth } from "../config/fire";
import "firebase/compat/auth";
import { useRouter } from "next/router";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "@firebase/auth";

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
  const signUp = (email, password) => {
    setIsLoading(true);
    setLoggingIn(false);
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log(cred);
        router.push("/Dashboard/DashboardPage");
        setIsLoading(false);
      })
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
  const logIn = (email, password) => {
    setIsLoading(true);
    setLoggingIn(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        router.push("/Dashboard/DashboardPage");
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          setErrMsg("invalid/wrong password");
        } else if (err.code === "auth/internal-error") {
          setErrMsg("Enter a valid password");
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
    return unsubscribe();
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
