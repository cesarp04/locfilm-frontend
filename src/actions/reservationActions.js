import axios from "axios"

const API_URL = 'http://45.56.74.146:8000';

export const getMyReservations = () => {
    
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("id")

    // const token = "0ce4ed48d0d935ec98e049519179d6df86c22861"
    // const userId = "01cf055f-1237-4169-8f21-96db16b5655f"

    return axios({
        url: `${API_URL}/users/${userId}/bookings/`,
        method: 'get',
        headers: {
            Authorization: ` Token ${token}`,
        }
    });
}

export const cancelReservation = (id) => {
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("id")

    return axios({
        url: `${API_URL}/bookings/${id}/update_status/`,
        method: 'patch',
        headers: {
            Authorization: ` Token ${token}`,
        },
        data: {
            status: 'Cancelled'
        }
    });
}

export const ratingReservation = (id, rating) => {
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("id")

    return axios({
        url: `${API_URL}/bookings/${id}/ratings/`,
        method: 'post',
        headers: {
            Authorization: ` Token ${token}`,
        },
        data: rating
    });
}