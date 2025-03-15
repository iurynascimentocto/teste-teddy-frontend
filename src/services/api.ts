import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.exemplo.com",
  headers: {
    "Content-Type": "application/json",
  },
});
