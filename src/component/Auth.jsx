import React, { useContext, useEffect, useState } from 'react'

const AuthContext =React.createContext()
export default function AuthProvider(props) {
    const [token, setToken]= useState("");
    const [userData, setUserData] = useState("");
    const storeData = JSON.parse(localStorage.getItem('users_data'));

    useEffect(()=>{
        if(storeData){
            const {userToken, user} = storeData;
            setToken(userToken);
            setUserData(user);
        }
    }, []);

    const login=(newToken, newData)=>{
        localStorage.setItem("users_data", JSON.stringify({userToken:newToken, user:newData}))
        setToken(newToken)
        setUserData(newData)
    }

    const logout=()=>{
        localStorage.removeItem("users_data");
        setToken("");
        setUserData("")
    }

  return (
    <AuthContext.Provider value={{token,login, logout, userData}}>
        {props.children}
    </AuthContext.Provider>

  )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}