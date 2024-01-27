import { createContext, useContext, useState } from "react";
// import { auth } from "../firebase";/
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"

const AuthContext = createContext({});

export const UseAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [newUser, setNewUser] = useState({});

  const auth = getAuth();

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password)
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    signup,
    newUser,
    setNewUser,
    login
  };

  return (
    <>
      <AuthContext.Provider value={authData}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
