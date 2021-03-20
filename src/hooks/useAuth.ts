import React from 'react'
import { useHistory } from "react-router-dom";
import useLocalStorage from './useLocalStorage'


export function useAuth() {
    const history = useHistory();
  
    const [auth, setAuth] = useLocalStorage("login", {
      isLoggedIn: false,
    });
  
    React.useEffect(() => {
      if (auth.isLoggedIn) {
        
        history.push("/profile");
      }
    }, [auth]);
 
    return {
      isLoggedIn: auth.isLoggedIn,
      setAuth,
    };
  }