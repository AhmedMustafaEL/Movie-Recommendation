import React, { createContext, useState, } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [userName, setUserName] = useState(() => {
       
        return localStorage.getItem("currentUser") || "";
    });

    return (
        <LoginContext.Provider value={{ userName, setUserName }}>
            {children}
        </LoginContext.Provider>
    );
};
