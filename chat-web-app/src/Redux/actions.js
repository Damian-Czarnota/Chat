export const AUTHENTICATE = 'AUTHENTICATED';
export const REGISTER = 'REGISTER';
export const SET_USER_INFO = 'SET_USER_INFO';
export const IS_ADMIN = 'IS_ADMIN';
export const COMPLETE_FORM = 'COMPLETE_FORM';

export const authenticate = value => ({
    type: AUTHENTICATE,
    payload: value
});

export const register = value =>({
    type: REGISTER,
    payload: value
});

export const setUserInfo = value =>({
    type: SET_USER_INFO,
    payload: value
});

export const isAdmin = value =>({
    type: IS_ADMIN,
    payload: value
});

export const completeForm = value =>({
    type: COMPLETE_FORM,
    payload: value
});