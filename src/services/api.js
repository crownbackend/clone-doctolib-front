import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BACKEND;

export default axios.create({
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
})