import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://127.0.0.1:8000/api/";

export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}users/`, user);
    localStorage.setItem("email", response.data.email);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}users/jwt/create/`, user);
    localStorage.setItem("token", response.data.access);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const patchUser = async (user, token) => {
  try {
    const response = await axios.patch(`${API_URL}users/me/`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  } catch (error) {
    console.log(error);
  }
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const isAuthenticated = () => {
  return getToken() !== null;
};

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${getToken()}`,
  },
});

axiosInstance.interceptors.response.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    if (error.response.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);
