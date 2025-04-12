import axios from "axios"
import { axiosInstance } from "../../../shared/api"
import { LoginProps } from "../types";

export const login = async () => {
    try {
        const respone = await axiosInstance.get<LoginProps>("/auth/login");
        localStorage.setItem("access_token", respone.data.access_token);
        localStorage.setItem("refresh_token", respone.data.refresh_token);
    } 
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Server error:", error.response?.data);
        }
        else {
            console.log("Something goes wrong", error);
        }
        throw error;
    }
}