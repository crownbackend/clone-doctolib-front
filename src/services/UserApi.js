import api from "./api.js";

class UserApi {
    baseUrl(){
        return '/users/'
    }
    register(data) {
        const url = this.baseUrl() + 'register'
        return api.post(url, data)
    }
}

export default new UserApi();