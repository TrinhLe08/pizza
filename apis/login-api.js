import httpRequest from "./axios-http-request";

const logiUsers = async (informationUser) => {
  try {
    const response = await httpRequest.post("/sessions", informationUser);
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
}; 

export const loginApi = {
    logiUsers,
}