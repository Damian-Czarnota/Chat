import { combineReducers } from 'redux';
import {AUTHENTICATE, REGISTER, SET_USER_INFO, COMPLETE_FORM, ADD_ROOM, SET_PROFILE_IMAGE, IS_IN_ROOM, SET_USERS } from './actions';

const userInitialState = {
    isAdmin: false,
    userInfo: {}
};

const authenticationInitialState = {
    authenticated: null,
    token: '',
    register: false
};

const roomsInitialState = {
    rooms: [],
    isInRoom: false,
    usersInRoom: []
};

function userReducer(state = userInitialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state,
                userInfo: action.payload};
        case SET_PROFILE_IMAGE:
            return {...state,
            userInfo: {
                ...state.userInfo,
                profileImage: action.payload
            }};
        default:
            return state;
    }
}

function authenticateReducer(state = authenticationInitialState, action) {
    switch (action.type) {
        case AUTHENTICATE:
            return {...state,
                authenticated: action.payload};
        case REGISTER:
            return {...state,
                register: action.payload};

        default:
            return state;
    }
}

function formReducer(state = [], action) {
    switch (action.type) {
        case COMPLETE_FORM:
            return {...state,
            values: action.payload };
        default:
            return state;
    }
}

function roomsReducer(state = roomsInitialState, action) {
    switch (action.type) {
        case ADD_ROOM:
            return {...state,
                rooms: action.payload };
        case IS_IN_ROOM:
            return {...state,
                isInRoom: action.payload };
        case SET_USERS:
            return {...state,
                usersInRoom: action.payload };
        default:
            return state;
    }
}
const chatRootReducer = combineReducers({
    userReducer,
    authenticateReducer,
    formReducer,
    roomsReducer
});

export default chatRootReducer