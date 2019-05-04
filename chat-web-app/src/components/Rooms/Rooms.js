import React, { Component } from "react";
import "./rooms.scss";
import AddRoom from "../Modals/AddRoom/AddRoom";
import * as roomService from "../../services/roomService";
import * as storageService from "../../services/storageService";
import * as wsService from "../../services/websocketService";
import {addRoom, isInRoom, toggleLeftBar} from "../../Redux/actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { rooms: state.roomsReducer.rooms,
            leftBarState: state.leftBarReducer.open};
};

const mapDispatchToProps = dispatch => {
    return {isInRoom: value => dispatch(isInRoom(value)),
            addRooms: value => dispatch(addRoom(value)),
            toggleLeftBar: value => dispatch(toggleLeftBar(value))};
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
        let { rooms, leftBarState } = this.props;
        return (
            <div className={`rooms ${leftBarState ? '' : 'rooms--hide'}`}>
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
                            <p className="rooms__room" title={room.name}>{room.name}</p>
                            <p>{room.numberOfUsers}&nbsp;<span className="fa fa-users"/> </p>
                        </li>
                    ))}
                    </ul>
                    {rooms.length===0&&(
                        <p className="info-text">Start from adding a new room :)</p>)}
                </div>
                <div className="toggle">
                    <button className={`button toggle__button ${leftBarState ? '' : 'toggle__button--hide'}`}
                            onClick={(e) => this.props.toggleLeftBar(!leftBarState)}>
                        <span className={`fas ${leftBarState ? 'fa-chevron-left' : 'fa-chevron-right'}`}></span>
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);