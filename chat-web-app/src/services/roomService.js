import fetch from 'cross-fetch'
import {getToken} from "../utils/utils";

export const create = (form) =>
    fetch(`${process.env.REACT_APP_API_URL}/rooms`,{
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
                return res
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
                return new Error(res);
            else
                return res.json()
        });

export const connectToRoom = (ID) =>
    fetch(`${process.env.REACT_APP_API_URL}/rooms/connect`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        },
        body:JSON.stringify({id:ID})
    })
        .then(res => {
            if (res.status >= 400)
                throw new Error("Bad response from server");
            else
                return res;
        });

export const disconnect = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/rooms/disconnect`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken()
        }
    })
        .then(res => {
            if (res.status >= 400)
                throw new Error("Bad response from server");
            else
                return res;
        });
};

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

export const getUsersInRoom = (ID) =>
    fetch(`${process.env.REACT_APP_API_URL}/rooms/${ID}/users`,{
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