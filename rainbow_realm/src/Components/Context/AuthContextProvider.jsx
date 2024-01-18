import React, {createContext, useEffect, useState} from 'react'
export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    let [isAuth, setIsAuth] = useState(false);
    let [user, setUser] = useState(null);

    const login = (userFound) => {
        setIsAuth(true);
        setUser(userFound);
    }

    const logout = () => {
      setIsAuth(false);
      setUser(null);
    };

    useEffect(() => {
      const storedAuth = localStorage.getItem('isAuth');
      const storedUser = localStorage.getItem('user');
  
      if (storedAuth && storedUser) {
        setIsAuth(JSON.parse(storedAuth));
        setUser(JSON.parse(storedUser));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('isAuth', isAuth);
      localStorage.setItem('user', JSON.stringify(user));
    }, [isAuth, user]);


  return (
    <AuthContext.Provider value={{ isAuth, user, login, logout }}>
    {children}
  </AuthContext.Provider>
);
}

export default AuthContextProvider