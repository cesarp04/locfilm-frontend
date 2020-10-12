import axios from "axios"

export const getLocationById = (id) => {

    const API_URL = 'http://45.56.74.146:8000/locations';

    
    // axios({
    //     url: `${API_URL}/${id}/`,
    //     method: 'get'
    // }).then((l) => {
    //     console.log(l.data);
    //     return l.data;
    // }).catch((e) => {
    //     return null;
    // });

    return axios({
        url: `${API_URL}/${id}/`,
        method: 'get'
    });
}