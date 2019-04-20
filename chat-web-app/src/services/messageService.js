import fetch from 'cross-fetch'
import {getToken} from "../utils/utils";

export const get = (roomID) =>
    fetch(`${process.env.REACT_APP_API_URL}/messages/${roomID}`,{
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

export const sendMessage = (content, roomID) =>
    fetch(`${process.env.REACT_APP_API_URL}/messages/${roomID}`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify({content: content})
    })
        .then(res => {
            if (res.status >= 400)
                throw new Error("Bad response from server");
            else
                return res
        });