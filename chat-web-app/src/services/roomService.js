import fetch from 'cross-fetch'
import {getToken} from "../utils/utils";

export const create = (form) =>
    fetch(`${process.env.REACT_APP_API_URL}/rooms/create`,{
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
    fetch(`${process.env.REACT_APP_API_URL}/rooms`,{
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