import httpRequest from "./axios-http-request";

const createCrusts = async (informationCrusts) => {
  try {
    const response = await httpRequest.post("/crusts", informationCrusts);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateCrusts = async (dataToUpdate, CrustsId) => {       
  try {
    const response = await httpRequest.put(`/crusts/${CrustsId}`, dataToUpdate);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allCrusts = async () => {
  try {
    const response = await httpRequest.get("/crusts/get/all");
    if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteCrusts = async (CrustsId) => {
  try {
    const response = await httpRequest.delete(`/crusts/${CrustsId}`);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const CrustsApi = {
    createCrusts,
    updateCrusts,
    allCrusts,
    deleteCrusts
}