import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { store } from "../Redux/store";
import { addRoom, addMessages, setUsersInRoom } from "../Redux/actions";



const socket = new SockJS(`${process.env.REACT_APP_WS_URL}`, 0);
const client = Stomp.over(socket);
client.debug = null;
let messagesSub, roomsSub, usersSub;

export const createConnection = (callback) => {
    client.connect({}, () => {
        callback()
    } )
};

export const subscribeToRooms = () => {
    roomsSub = client.subscribe('/topic/rooms', (message) => {
        let response = JSON.parse(message.body);
        store.dispatch(addRoom(response.rooms));
    })
};

export const subscribeToRoomMessages = (ID) => {
    messagesSub = client.subscribe(`/topic/messages/${ID}`, (message) => {
        let response = JSON.parse(message.body);
        store.dispatch(addMessages(response));
    })
};

export const subscribeToRoomUsers = (ID) => {
    usersSub = client.subscribe(`/topic/room/${ID}/users`, (message) => {
        let response = JSON.parse(message.body);
        store.dispatch(setUsersInRoom(response.users));
    })
};

export function disconnectFromRoomMessages() {
    messagesSub.unsubscribe();
}

export function disconnectFromRooms() {
    roomsSub.unsubscribe();
}

export function disconnectFromRoomUsers() {
    usersSub.unsubscribe();
}