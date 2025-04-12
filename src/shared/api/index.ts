import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://api.mushysoft.online",
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  })