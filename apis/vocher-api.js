import httpRequest from "./axios-http-request";

const createVoucher = async (informationVoucher) => {
  try {
    const response = await httpRequest.post("/vouchers", informationVoucher);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const updateVoucher = async (dataToUpdate, VoucherId) => {       
  try {
    const response = await httpRequest.put(`/vouchers/${VoucherId}`, dataToUpdate);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const allVoucher = async () => {
  try {
    const response = await httpRequest.get("/vouchers/get/all");
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

const deleteVoucher = async (VoucherId) => {
  try {
    const response = await httpRequest.delete(`/vouchers/${VoucherId}`);
        if (response.status === 401 && response.data === "Token expired") {
       await AsyncStorage.removeItem('authorization');
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return;
  }
};

export const VoucherApi = {
    createVoucher,
    updateVoucher,
    allVoucher,
    deleteVoucher
}