import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(true);

    const value = {
        isAuth,
        setIsAuth,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
