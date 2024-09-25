import api from "./api";

export const login = async (email, password) => {
    const response = await api.post("/auth/login", {email, password});
    // console.log(response)
    return response.data;
}

export const register = async (name, email, password ) => {
    const response = await api.post("/auth/register", {name, email, password});
    return response.data;
}

export const logout = async () =>{
    const response = await api.post("/auth/logout");
    return response.data;
}

export const reset = async (email, password, oldPassword) => {
    const response = await api.put("/auth/reset", {email, password, oldPassword});
    return response.data;
}

export const getUser = async () => {
    try {
      const response = await api.get("/auth/getuser"); // Ensure this endpoint is correct
      return response.data; // Return user data from the response
    } catch (error) {
      console.error("Error fetching user:", error.response ? error.response.data : error.message);
      throw error; // Re-throw the error to be handled by the caller
    }
  };
  