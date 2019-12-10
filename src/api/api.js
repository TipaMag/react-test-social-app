import * as Axios from "axios"

const instance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ebc7e21a-0187-47c6-b6b1-04fa159fb0a8'
    }
})
const profilePhotoInstance = Axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ebc7e21a-0187-47c6-b6b1-04fa159fb0a8',
        'content-type': 'multipart/form-data'
    }
})

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`)
    },
    setUnfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateProfileStatus(userStatus) {
        return instance.put(`profile/status`, {status: userStatus})
    },
    setProfilePhoto(formData) {
        return profilePhotoInstance.put(`profile/photo`, formData)
    }
}
export const authAPI = { //use headerContainer and login-page
    getAuth() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}