import axios from "axios";

export const registerAPI = async (values) => {
  return await axios.post(`http://localhost:4000/signup`, {
    values,
  });
};

export const loginAPI = async (values) => {
  return await axios.post(`http://localhost:4000/signin`, {
    values,
  });
};
