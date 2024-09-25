import api from "./api";

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error.response?.data || error.message);
    throw error;
  }
};

export const register = async (name, email, password) => {
  try {
    const response = await api.post("/auth/register", { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error("Error during logout:", error.response?.data || error.message);
    throw error;
  }
};

export const reset = async (email, password, oldPassword) => {
  try {
    const response = await api.post("/auth/reset", { email, password, oldPassword });
    // console.log('response in auth services', response)
    return response.data;
  } catch (error) {
    console.error("Error during password reset:", error.response?.data || error.message);
    throw error;
  }
};


export const getUser = async () => {
    try {
      const response = await api.get("/auth/getuser"); // Ensure this endpoint is correct
      return response.data; // Return user data from the response
    } catch (error) {
      console.error("Error fetching user:", error.response ? error.response.data : error.message);
      throw error; // Re-throw the error to be handled by the caller
    }
  };
  