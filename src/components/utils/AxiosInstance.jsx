import axios from "axios";
const baseURL="http://localhost:4000";


const api = axios.create({
    baseURL:baseURL,
    withCredentials:true
})


export default api