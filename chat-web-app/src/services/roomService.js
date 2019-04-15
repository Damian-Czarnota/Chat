import fetch from 'cross-fetch'
const URL = process.env.REACT_APP_API_URL;

export const create = (form) =>
    fetch(`${URL}/rooms`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify(form)
    })
        .then(res => {
            if (res.status >= 400)
                throw new Error("Bad response from server");
            else
                return res.json()
        });

export const getRooms = () =>
    fetch(`${URL}/rooms`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => {
            if (res.status >= 400)
                throw new Error("Bad response from server");
            else
                return res.json()
        });

export const getToken = () =>{
    return localStorage.getItem('Authorization')
};