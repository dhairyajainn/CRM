import { createContext, useState, useEffect, useContext } from "react";
import { getUser } from "../services/authService"; // Ensure this is correctly implemented

// Create the context
const AuthContext = createContext();

// Create the provider component
export const Context = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state as null
  const [loading, setLoading] = useState(true); // Start as true since you're fetching data
  // const [isAuthenticed, setIsAuthenticated] = useState(false);
  const saveUser = (userData) => {
    setUser(userData)
  }
   
  useEffect(() => {
    const loadUser = async () => {
      console.log("loadUser called");
      setLoading(true); // Show loading
      try {
        const userData = await getUser(); // Fetch user data from backend
        // console.log("userData in loadUser:>> ", userData);
        // if(userData) {
        //   setIsAuthenticated(true);
        // }
        setUser(userData); // Update the user state
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setLoading(false); // Hide loading once done
      }
    };
    // Call the loadUser function to fetch user data
    loadUser();
  }, []);

  // Debugging: log the user data after it's updated
  // useEffect(() => {
  //   if (user) {
  //     // console.log("user :", user);
  //   }
  // }, [user]);
  
  return (
    <AuthContext.Provider value={{ user, loading, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
