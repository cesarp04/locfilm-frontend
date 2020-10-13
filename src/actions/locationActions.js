import axios from "axios"

const API_URL = 'http://45.56.74.146:8000/locations';

export const getLocationById = (id) => {

    return axios({
        url: `${API_URL}/${id}/`,
        method: 'get'
    });
}

export const searchLocations = (textSearch, city) => {

    const queryParams ={};
    queryParams["search"] = textSearch;

    if(city){
        queryParams["city"] = city;
    }
    
    return axios({
        url: `${API_URL}/`,
        method: 'get',
        params: queryParams
    });
}

export const getImagesLocation = (id) => {
    
    return axios({
        url: `${API_URL}/${id}/images/`,
        method: 'get',
    });
}