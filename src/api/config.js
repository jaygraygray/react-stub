import axios from "axios";
export const config = {
  baseUrl: "https://dog.ceo/api/",
};

// base helper functions
export const getRequest = async ({ url }) => {
  return await axios.get(`${config.baseUrl}${url}`);
};

// business logic requests
export const getAllPups = async ({ cb }) => {
  const url = "breeds/list/all";
  const { data } = await getRequest({ url });
  if (data && cb) {
    cb(data.message);
  }
};
