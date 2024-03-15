import httpRequest from "./axios-http-request";

const createUser = async (informationUser) => {
  try {
    const response = await httpRequest.post("/users", informationUser);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateUsers = async (informationUser) => {
  try {
    const response = await httpRequest.put("/users/me", informationUser);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updatePassword = async (newPassword) => {
  try {
    const response = await httpRequest.patch("/users/me", newPassword);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allUser = async () => {
  try {
    const response = await httpRequest.get("/users/all");
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const myInformation = async () => {
  try {
    const response = await httpRequest.get("/users/me");
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await httpRequest.delete(`/users/delete/${userId}`);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const usersApi = {
    createUser,
    updateUsers,
    updatePassword,
    myInformation,
    allUser,
    deleteUser
}