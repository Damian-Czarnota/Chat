import { createStore } from 'redux';
import chatRootReducer from './reducers';

export const store = createStore(chatRootReducer);