const URL = process.env.REACT_APP_API_URL;

export const register = (form) =>
    fetch(`${URL}/auth/register`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(form)
    })
        .then(res => res);