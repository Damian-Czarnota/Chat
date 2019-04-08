export const prepareFormData = (arr) =>{
    if(arr instanceof Array) {
        let params = {};
        arr.forEach(val => {
            params[val.key] = val.value;
        });
        return params;
    }
};