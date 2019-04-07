export const prepareFormData = (arr) =>{
    let params = {};
    arr.forEach(val =>{
        params[val.key] = val.value;
    });
    return params;
};