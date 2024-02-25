import { createContext, useEffect, useState } from 'react';

const ContextApi = createContext();

const ContextApp = ({ children }) => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        id: "",
        role: "",
        token: "",
        isAuth: false,
    });

    // Get user data from localStorage if it exists. If not, initialize with empty object
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("accessToken"));
        if (user) {
            setUser(user);
        }
    }, []);



    return (
        <ContextApi.Provider value={{
            user, setUser,
        }}>
            {children}
        </ContextApi.Provider>
    )
}

export { ContextApp, ContextApi };