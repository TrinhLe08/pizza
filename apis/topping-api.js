import httpRequest from "./axios-http-request";

const createToppings = async (informationToppings) => {
  try {
    const response = await httpRequest.post("/toppings", informationToppings);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateToppings = async (dataToUpdate,ToppingsId) => {       
  try {
    const response = await httpRequest.put(`/toppings/${ToppingsId}`, dataToUpdate);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allToppings = async () => {
  try {
    const response = await httpRequest.get("/toppings/get/all");
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteToppings = async (ToppingsId) => {
  try {
    const response = await httpRequest.delete(`/toppings/${ToppingsId}`);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const ToppingsApi = {
    createToppings,
    updateToppings,
    allToppings,
    deleteToppings
}