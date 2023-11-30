// apiConfig.js
import { decodeToken } from "react-jwt";

const BASE_URL = 'https://api-stunting.up.railway.app/api'; // Ganti dengan base URL Anda

const token = localStorage.getItem("access_token")

const apiAuth = () => {
    const token = localStorage.getItem("access_token")
    return {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            //   'content-type': 'multipart/form-data'
        },
    };
}

const dataAuth = () => {
    const decoded = decodeToken(localStorage.getItem("access_token"))
    if (decoded) {
        return {
            id: decoded.instansi_id,
            nama: decoded.instansi,
            userId: decoded.user_id
        };
    } else {
        // Jika token tidak valid atau belum tersedia
        return {
            id: null,
            nama: null,
            userId: null
        };
    }
};


export default BASE_URL;

export { apiAuth, dataAuth, token }
