import axios from "axios";

export type UsersType = {
    id: number
    name: string
    status: string
    photos: { small: (string), large: (string) }
    followed: boolean
}

export type GetUsersType = {
    error: null | string
    items: UsersType[]
    totalCount: number
}

type DeletePostUser = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type PostType = {
    data:{}
    fieldsErrors:[]
    messages:Array<string>
    resultCode: number
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {}
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: { small: (string), large: (string) }
}
type AuthMeType = {
    data: {
        id: number,
        email: string,
        login: string
    }
    resultCode: number
    messages: Array<string>
}
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6848e7a3-c65e-4b3a-a0cd-7fc7aba10163"
    }
})

export const userAPI = {
    getUsers (currentPage= 1, pageSize = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    deleteUsers(userId: number){
        return instance.delete<DeletePostUser>(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    postUser(userId: number){
        return instance.post<PostType>(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
}

export const authAPI = {
    getAuth(){
        return instance.get<AuthMeType>(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
}

export const profileAPI = {
    getProfile(userId: string){
        return instance.get<ProfileType>(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    }
}
