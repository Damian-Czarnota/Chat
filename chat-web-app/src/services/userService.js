import fetch from 'cross-fetch'
const URL = process.env.REACT_APP_API_URL;

export const register = (form) =>
    fetch(`${URL}/auth/register`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)
    })
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
        })
        .then(res => res);

export const login = (form) =>
    fetch(`${URL}/auth/login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)
    })
        .then(res => {
            if (res.status >= 400) {
                throw new Error("Bad response from server");
            }
        })
        .then(res => res);