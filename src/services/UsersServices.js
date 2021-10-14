import axios from "axios";

const http = axios.create({
    baseURL: "https://three-points.herokuapp.com/api",
    withCredentials: true
}
)

http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if(error?.response.status === 401){
            window.location.replace('/login')
            localStorage.clear();
        }
    }
)

export const getLogin = (username,password) => http.post('/login', {username, password});

export const getLogout = (username) => http.post('/logout', {username});

export const getPosts = () => http.get('/posts');

export function getUserId(id){
    return axios.get('https://three-points.herokuapp.com/api/users/'+id, {widthCredentials: true});
}

export function getLike(id){
    return axios.post('https://three-points.herokuapp.com/api/posts/'+id+'/like', {widthCredentials: true});
}