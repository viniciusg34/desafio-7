import axios from "axios";

export const apiFilmes = axios.create({

    baseURL: 'https://626979e2f2c0cdabac0f19e8.mockapi.io/',

    headers: {
        'Content-Type' : 'application/Json'
    }
  });