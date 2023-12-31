// apiConfig.js
import { decodeToken } from "react-jwt";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const BASE_URL = 'https://stuntingbc.kencang.id/api';
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
            userId: decoded.user_id,
            role: decoded.role
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

const errorHandling = (error) => {
    let errorMessageString = error;
    // console.log(error);
    // console.log(error.response.data.message);
    // if (error.response.status === 422) {
    //     const errorData = error.response.data.message;
    //     const errorMessages = [];
    //     for (const key in errorData) {
    //         if (errorData.hasOwnProperty(key)) {
    //             errorMessages.push(`${key}: ${errorData[key]}`);
    //         }
    //     }
    //     errorMessageString = errorMessages.join('\n');
    // } else {
    //     errorMessageString = "error";
    // }
    Swal.fire({
        title: "Terjadi kesalahan",
        // text: error.response.data.message,
        text: errorMessageString,
        icon: "warning"
    })
}

const loginHandling = (error) => {
    let errorMessageString;
    if (error.response.status === 422) {
        const errorData = error.response.data.message;
        const errorMessages = [];
        for (const key in errorData) {
            if (errorData.hasOwnProperty(key)) {
                errorMessages.push(`${key}: ${errorData[key]}`);
            }
        }
        errorMessageString = errorMessages.join('\n');
    } else {
        errorMessageString = "Pastikan Username dan Password Benar!";
    }
    Swal.fire({
        title: "Terjadi kesalahan",
        text: errorMessageString,
        icon: "warning"
    })
}


export default BASE_URL;

export { apiAuth, dataAuth, token, errorHandling, loginHandling }
