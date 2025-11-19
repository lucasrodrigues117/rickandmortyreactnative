import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getCharacters = async (page = 1, search = "") => {
  const response = await api.get(`/character`, {
    params: {
      page: page,
      name: search,
    },
  });

  return response.data;
};

export default api;
