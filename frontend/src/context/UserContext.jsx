import { createContext, useState, useContext } from "react";

// Create a context for the user
const UserContext = createContext();

// Create a custom hook to use the user context
export const useUser = () => useContext(UserContext);

// Create a provider component to wrap your application and provide the user context
export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null); // Initialize token state to null

    // Function to set user and token
    const login = (authToken) => {
        setToken(authToken);
    };

    // Function to clear user and token
    const logout = () => {
        setToken(null);
        // window.location.reload();
    };

    // Value object to provide to the context consumers
    const value = {
        token,
        login,
        logout,
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
