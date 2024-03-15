import httpRequest from "./axios-http-request";

const createSizes = async (informationSizes) => {
  try {
    const response = await httpRequest.post("/sizes", informationSizes);
    if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateSizes = async (dataToUpdate, sizeId) => {       
  try {
    const response = await httpRequest.put(`/sizes/${sizeId}`, dataToUpdate);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allSizes = async () => {
  try {
    const response = await httpRequest.get("/sizes/get/all");
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteSizes = async (SizesId) => {
  try {
    const response = await httpRequest.delete(`/sizes/${SizesId}`);
    if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const SizesApi = {
    createSizes,
    updateSizes,
    allSizes,
    deleteSizes
}