import axios from 'axios';

const registerUsre = (data) => {
    return axios.post('/user/register', data);

}
const loginUsre = (data) => {
    return axios.post('/user/login', data);
}

const AuthServices = {
    registerUsre,
    loginUsre
}

export default AuthServices;