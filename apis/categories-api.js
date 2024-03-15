import httpRequest from "./axios-http-request";

const createCategories = async (informationCategories) => {
  try {
    const response = await httpRequest.post("/categories", informationCategories);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateCategories = async (dataToUpdate, categoriesId) => {       
  try {
    const response = await httpRequest.put(`/categories/${categoriesId}`, dataToUpdate);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allCategories = async () => {
  try {
    const response = await httpRequest.get("/categories/get/all");
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteCategories = async (categoriesId) => {
  try {
    const response = await httpRequest.delete(`/categories/${categoriesId}`);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const categoriesApi = {
    createCategories,
    updateCategories,
    allCategories,
    deleteCategories
}