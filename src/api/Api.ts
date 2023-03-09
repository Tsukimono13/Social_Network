import axios from "axios";


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
    },
    deleteUsers(id: number){
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },
    postUser(id: number){
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }

}

export const authAPI = {
    getAuth(){
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
}

export const profileAPI = {
    getProfile(userId: string){
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    }
}
