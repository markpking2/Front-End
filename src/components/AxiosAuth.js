import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('ec-token');

    return axios.create({
        baseURL: 'https://empowered-conversations.herokuapp.com/',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        }
    })
}