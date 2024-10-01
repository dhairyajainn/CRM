import { createContext, useState, useEffect, useContext } from "react";
import { getUser } from "../services/authService"; // Ensure this is correctly implemented

// Create the context
const AuthContext = createContext();

// Create the provider component
export const Context = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state as null
  const [loading, setLoading] = useState(true); // Start as true since you're fetching data
  const [error, setError] = useState('')
  
  const saveUser = (userData) => {
    setUser(userData)
  }
   
  useEffect(() => {
    let isMounted = true; // Track whether the component is mounted
  
    const loadUser = async () => {
      console.log("loadUser called");
      setLoading(true);
      try {
        const userData = await getUser();
        if (isMounted) {
          setUser(userData); 
        }
      } catch (error) {
        console.error("Failed to load user:", error);
        if (isMounted) {
          setError("Failed to load user");
        }
      } finally {
        if (isMounted) {
          setLoading(false); 
        }
      }
    };
  
    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// // Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);