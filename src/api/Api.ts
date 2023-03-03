import axios from "axios";

const baseUrl = "https://social-network.samuraijs.com/api/1.0/"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6848e7a3-c65e-4b3a-a0cd-7fc7aba10163"
    }
})

export const userAPI = {
    getUsers (currentPage= 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}

