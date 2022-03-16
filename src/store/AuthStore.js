import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService";

class AuthStore {
    user = {
        email: "none",
        userName: "Загрузка...",
        role: "guest",
        id: 999
    }

    setUser(user) {
        this.user = user;
    }

    constructor() {
        makeAutoObservable(this)
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            console.log('login', response)
            localStorage.setItem('token', response.data.accessToken)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }

    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password)
            console.log(response);
            localStorage.setItem('token', response.data.accessToken)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    logout() {
        console.log('logout')
    }

}

export default new AuthStore();