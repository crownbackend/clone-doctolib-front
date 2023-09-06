import api from "./api.js";

class User {
    baseUrl(){
        return '/user/'
    }
    register(data) {
        const url = this.baseUrl() + 'register'
        return api.post(url, data)
    }
}

export default new User()