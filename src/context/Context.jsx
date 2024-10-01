import { createContext, useState, useEffect, useContext } from "react";
import { getUser } from "../services/authService"; // Ensure this is correctly implemented

// Create the context
const AuthContext = createContext();

// Create the provider component
export const Context = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state as null
  const [loading, setLoading] = useState(false); // Start as true since you're fetching data
  const saveUser = (userData) => {
    setUser(userData);
  };

  useEffect(() => {
    const loadUser = async () => {
      console.log("loadUser called");
      setLoading(true); // Show loading
      try {
        const userData = await getUser();
        setUser(userData); // Update the user state
      } catch (error) {
        console.error("Failed to load user:", error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
