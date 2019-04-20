import React, { Component } from "react";
import "../Rooms/rooms.scss";
import * as roomService from "../../services/roomService";
import * as storageService from "../../services/storageService";
import {isInRoom} from "../../Redux/actions";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => {
    return { isInRoom: value => dispatch(isInRoom(value))}
};

const mapStateToProps = state => {
    return { users: state.roomsReducer.usersInRoom }
};

class Users extends Component {
    constructor(props){
        super(props);
        this.leaveRoom = this.leaveRoom.bind(this);
    }

    leaveRoom = () => {
        roomService.disconnect().then( () =>{
            this.props.isInRoom(false);
            storageService.deleteFromStorage("RoomID");
        })
    };

    render() {
        let { users } = this.props;
        return (
            <div className="rooms">
                <div className="rooms__header">
                    <div className="col col__half col__align--center col__justify--right">
                        Users
                    </div>
                    <div className="col col__half col__align--center col__justify--right">
                        <button className="btn circle circle--white" onClick={this.leaveRoom}><i className="fas fa-arrow-left"></i></button>
                    </div>
                </div>
                <div className="rooms__list">
                    <ul>{users&&users.map((room, key) =>(
                        <li key={key} className="rooms__item rooms__item--no-hover">
                            <img src="" className="avatar" />
                            {room.name}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(Users);