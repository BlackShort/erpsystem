import { createContext, useEffect, useState } from 'react';

const ContextApi = createContext();

const ContextApp = ({ children }) => {
    const [admin, setAdmin] = useState({
        username: "",
        email: "",
        id: "",
        role: "",
        token: "",
        isAuth: false,
    });

    // Get user data from localStorage if it exists. If not, initialize with empty object
    useEffect(() => {
        const admin = JSON.parse(localStorage.getItem("adminToken"));
        if (admin) {
            setUser(admin);
        }
    }, []);



    return (
        <ContextApi.Provider value={{
            admin, setAdmin
        }}>
            {children}
        </ContextApi.Provider>
    )
}

export { ContextApp, ContextApi };