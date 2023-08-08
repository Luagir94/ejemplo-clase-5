import axios from "axios";

export const httpService = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
