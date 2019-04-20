import React, { Component } from "react";
import "./rooms.scss";
import AddRoom from "../Modals/AddRoom/AddRoom";
import * as roomService from "../../services/roomService";
import * as storageService from "../../services/storageService";
import * as wsService from "../../services/websocketService";
import {addRoom, isInRoom} from "../../Redux/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { rooms: state.roomsReducer.rooms};
};

const mapDispatchToProps = dispatch => {
    return {isInRoom: value => dispatch(isInRoom(value)),
            addRooms: value => dispatch(addRoom(value))};
};

class Rooms extends Component {
    constructor(props){
        super(props);
        this.connectToRoom = this.connectToRoom.bind(this);
    }

    componentWillMount() {
        roomService.getRooms()
            .then(({rooms}) => {
                this.props.addRooms(rooms) ;
            });
        wsService.subscribeToRooms();
    }

    componentWillUnmount() {
        wsService.disconnectFromRooms();
    }

    connectToRoom = (room) => {
        roomService.connectToRoom(room.id).then(res =>{
            storageService.saveInStorage("RoomID", room.id);
            storageService.saveInStorage("RoomName", room.name);
            this.props.isInRoom(true);
        })
    };

    render() {
        let { rooms } = this.props;
        return (
            <div className="rooms">
                <div className="rooms__header">
                    <div className="col col__half col__align--center col__justify--right">
                        Rooms
                    </div>
                    <div className="col col__half col__align--center col__justify--right">
                        <AddRoom />
                    </div>
                </div>
                <div className="rooms__list">
                    <ul>{rooms&&rooms.map((room, key) =>(
                        <li key={key} className="rooms__item" onClick={(e) => this.connectToRoom(room)}>
                            <span>{room.name}</span>
                            <span>{room.numberOfUsers}&nbsp;<i className="fa fa-users"/> </span>
                        </li>
                    ))}
                    </ul>
                    {rooms.length===0&&(
                        <p className="info-text">Start from adding a new room :)</p>)}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);