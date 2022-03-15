import {
    makeAutoObservable
} from "mobx"
import GotService from '../services/GotService';
import $api from "../http";

const gotService = new GotService();

class AuthStore {
    user = {
        email: "none",
        userName: "Гость",
        role: "guest",
        id: 999
    }

    constructor() {
        makeAutoObservable(this)    
    }

    login(email, password) {
        return $api.post('/login', {
                email,
                password
            })
            .then(res => this.user = res.data.user)
            .catch(error => {
                console.log(error)
            });
    }

    registration(email, password) {
        const id = `f${(+new Date).toString(16)}`;
        return $api.post('/register', 
        {
            email,
            password,
            "userName": 'Новологиненный чел',
            "role": 'user',
            id
        })
        .then(res => this.user = res.data.user)
        .catch(error => {
            console.log(error)
        });
    }

    logout() {
        console.log('logout')
    }

}

export default new AuthStore();