import axios from "axios";
export const config = {
  baseUrl: "https://dog.ceo/api/",
};

// base helper functions
export const getRequest = async ({ url }) => {
  return await axios.get(`${config.baseUrl}${url}`);
};

// business logic requests along with utils
function formatDogs(list) {
  var formattedList = [];
  var dogBreeds = Object.keys(list);
  var subBreeds = Object.values(list);
  dogBreeds.forEach((dog, i) => {
    if (subBreeds[i].length === 0) {
      formattedList.push(dog);
    } else {
      subBreeds[i].forEach((sub) => {
        formattedList.push(`${sub} ${dogBreeds[i]}`);
      });
    }
  });
  return formattedList;
}

export const getAllPups = async ({ cb }) => {
  const url = "breeds/list/all";
  const { data } = await getRequest({ url });
  if (data) {
    const formattedData = formatDogs(data.message);
    if (cb) {
      cb(formattedData);
    }
  }
};
