import axios from "axios";
import config from '@/configs/config.ts';
import { Message } from 'element-ui';

const axiosConfig = {
    baseURL: config.baseUrl,
    timeout: config.timeout
}
const service = axios.create(axiosConfig);

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
);

service.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error);
        Message({
            message: error,
            type: 'error',
            duration: 5 * 1000,
        })
        return Promise.reject(error)
    }
);
export default service;