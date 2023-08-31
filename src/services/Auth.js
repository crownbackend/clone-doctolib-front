import api from "./api.js";

class Auth {

    baseUrl(){
        return '/auth/'
    }
    login(data) {
        const url = this.baseUrl() + 'login'
        return api.post(url, data)
    }
}

export default new Auth()