import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
});

export const getPersons = async () => {
  const response = await api.get("");
  return response.data.items;
};
