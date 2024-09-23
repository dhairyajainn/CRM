import api from "./api";

export const taskSave = async (title) => {
    try {
      const response = await api.post("/tasks", { title });
      return response.data;
    } catch (error) {
      console.error("Error saving task:", error.response ? error.response.data : error.message);
      throw error; // Rethrow to handle it where you call this function
    }
  };
  