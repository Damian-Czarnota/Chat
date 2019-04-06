import { combineReducers } from 'redux';
import { AUTHENTICATE, REGISTER, SET_USER_INFO, IS_ADMIN } from './actions';

const userInitialState = {
    isAdmin: false,
    userInfo: {}
};

const authenticationInitialState = {
    authenticated: null,
    token: '',
    register: false
};

function userReducer(state = userInitialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {...state,
                userInfo: action.payload};
        case IS_ADMIN:
            return {...state,
                isAdmin: action.payload};
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

const chatRootReducer = combineReducers({
    userReducer,
    authenticateReducer
});

export default chatRootReducer