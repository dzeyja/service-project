import axios from "axios";

export const $api = axios.create({
    baseURL: 'https://service-project-9inb.onrender.com'
})