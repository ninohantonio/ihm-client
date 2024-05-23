import React, {createContext, useContext, useState} from 'react';
import AuthService from "../services/auth_services/auth";

const AuthContext = createContext(undefined);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {

    const getIsAuth = async () => {
        const response = await AuthService.isauth()
    }
    const [isAuth, setIsAuth] = useState(getIsAuth);

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
