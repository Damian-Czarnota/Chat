import React, {Component, Fragment} from "react";
import Rooms from "../../components/Rooms/Rooms";
import Messages from "../../components/Messages/Messages";
import Users from "../../components/Users/Users";
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import * as roomService from "../../services/roomService";

export default class MainScreenApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isInRoom: false,
            rooms: []
        };
        this.messages = [];
        this.socket = null;
        this.client = null;
    }

    componentWillMount(){
        roomService.getRooms()
            .then(({rooms}) => {
               this.setState({rooms: rooms}) ;
            });
        this.socket = new SockJS("http://localhost:8001/api/auth/ws");
        this.client = Stomp.over(this.socket);
    }
    componentDidMount(){
        this.client.connect({}, () => {
            this.client.subscribe('/topic/rooms', (message) => {
                console.log(JSON.parse(message.body));
            })
        });

    };
    render() {
        let { isInRoom, rooms } = this.state;
        return(
            <div className="container">
                {isInRoom&&(
                    <Fragment>
                        <Users users={this.data}/>
                        <Messages messages={this.messages} />
                    </Fragment>
                )}
                {!isInRoom&&(
                    <Fragment>
                        <Rooms rooms={rooms} />
                        <div className="advert">
                            <p>Select your room and start chatting now!</p>
                        </div>
                    </Fragment>

                )}
            </div>
        )
    }
}