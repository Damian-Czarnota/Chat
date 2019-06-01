import fetch from 'cross-fetch'
import {getToken} from "../utils/utils";
import customError from "../utils/customError";

export const get = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/me`, {
        method: 'GET',
        headers: {
            'Authorization': getToken()
        }
    })
        .then(res => {
            if (res.status >= 400)
                return new customError(res.type, res.ok, res.status);
            else
                return res.json()
        });
};

export const change = (file) =>{
    let fd = new FormData();
    fd.append('file', new Blob([(file[0])], {
        type: file[0].type
    }),file[0].name);
    return fetch(`${process.env.REACT_APP_API_URL}/me`,{
        method:'POST',
        headers:{
            'Authorization': getToken()
        },
        body:fd
    })
        .then(res => {
            if (res.status >= 400)
                throw new Error("Bad response from server");
            else
                return res.json();
        });
};

export const put = (form) => {
    return fetch(`${process.env.REACT_APP_API_URL}/me`, {
        method: 'PUT',
        headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(res => {
            if (res.status >= 400) {
                throw new customError(res.type, res.ok, res.status);
            }
        })
        .then(res => res);
};