import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  doc,
  db,
  getDoc,
} from "src/firebase";

const AuthContext = createContext();
const auth = getAuth();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.data());
          setUser(docSnap.data());
        } else {
          console.log("not found");
        }
      } else {
        setUser(null);
      }
    });
  }, []);

  const signIn = (_email, _password) => {
    return createUserWithEmailAndPassword(auth, _email, _password);
  };

  const login = (_email, _password) => {
    return signInWithEmailAndPassword(auth, _email, _password);
  };

  const logout = () => {
    auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
