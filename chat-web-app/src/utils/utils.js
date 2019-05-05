import {getFromStorage} from "../services/storageService";

export const prepareFormData = (arr) =>{
    if(arr instanceof Array) {
        let params = {};
        arr.forEach(val => {
            params[val.key] = val.value;
        });
        return params;
    }
};

export const getToken = () => {
    return getFromStorage("Authorization")
};

export const formDate = (data) => {
    let index = data.indexOf('T');
    return `${data.slice(index+1,index+9)} ${data.slice(0,index)}`;
};

export const markMessages = (array, id) => {
    array.forEach(item =>
    item.author.id === id
        ? item.isMine = true
        : item.isMine = false);

    return array
};