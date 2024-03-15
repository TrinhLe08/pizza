import httpRequest from "./axios-http-request";

const createProduct = async (informationProduct) => {
  try {
    const response = await httpRequest.post("/products", informationProduct);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateProduct = async (dataToUpdate, ProductId) => {       
  try {
    const response = await httpRequest.put(`/products/${ProductId}`, dataToUpdate);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allProduct = async () => {
  try {
    const response = await httpRequest.get("/products/get/all");
    if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteProduct = async (ProductId) => {
  try {
    const response = await httpRequest.delete(`/products/${ProductId}`);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const ProductApi = {
    createProduct,
    updateProduct,
    allProduct,
    deleteProduct
}