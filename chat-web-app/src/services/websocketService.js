import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import { store } from "../Redux/store";
import {addRoom} from "../Redux/actions";

const socket = new SockJS(`${process.env.REACT_APP_WS_URL}`);
const client = Stomp.over(socket);
client.debug = null;

export const subscribeToRooms = () => {
    client.connect({}, () => {
        client.subscribe('/topic/rooms', (message) => {
            let response = JSON.parse(message.body);
            console.log(response);
            store.dispatch(addRoom(response.rooms));
        })
    });
};

export const subscribeToRoom = (ID) => {
    client.connect({}, () => {
        client.subscribe('/topic/rooms/id', (message) => {
            let response = JSON.parse(message.body);
            console.log(response);
        })
    });
};