export const AUTHENTICATE = 'AUTHENTICATED';
export const REGISTER = 'REGISTER';
export const SET_USER_INFO = 'SET_USER_INFO';
export const COMPLETE_FORM = 'COMPLETE_FORM';
export const ADD_ROOM = 'ADD_ROOM';
export const SET_PROFILE_IMAGE = 'SET_PROFILE_IMAGE';
export const IS_IN_ROOM = 'IS_IN_ROOM';
export const SET_USERS = 'SET_USERS';
export const ADD_MESSAGES = 'ADD_MESSAGES';

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

export const setProfileImage = value =>({
    type: SET_PROFILE_IMAGE,
    payload: value
});

export const completeForm = value =>({
    type: COMPLETE_FORM,
    payload: value
});

export const addRoom = value =>({
    type: ADD_ROOM,
    payload: value
});

export const isInRoom = value =>({
    type: IS_IN_ROOM,
    payload: value
});

export const setUsersInRoom = value =>({
    type: SET_USERS,
    payload: value
});

export const addMessages = value =>({
    type: ADD_MESSAGES,
    payload: value
});