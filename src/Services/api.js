import axios from "axios";

const API = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
    timeout : 5000,
    responseType : 'json',
});

export function loginAuth( object ) {
    return API.post('user/auth', object)
        .then(doc => {
            return doc.data
        })
}
