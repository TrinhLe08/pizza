import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpRequest = axios.create({
  baseURL: 'https://dev.kinpizza.com/api/v1/', 
  withCredentials: false
});

httpRequest.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("authorization"); 
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpRequest;