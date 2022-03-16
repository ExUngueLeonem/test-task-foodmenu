import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', {email, password})
    }
    static async registration(email, password, userName) {
        const id = `f${(+new Date).toString(16)}`;
        if (userName === '') {userName += `Легионер ${id}`}
        return $api.post('/register', {
                email,
                password,
                userName,
                "role": 'user',
                id
            })
        }
    static async logout() {
        return $api.post('/logout')
    }

}