import React, { Component } from "react";
import "../Rooms/rooms.scss";
import * as roomService from "../../services/roomService";
import * as storageService from "../../services/storageService";
import * as wsService from "../../services/websocketService";
import { isInRoom, setUsersInRoom } from "../../Redux/actions";
import { connect } from "react-redux";


const mapDispatchToProps = dispatch => {
    return { isInRoom: value => dispatch(isInRoom(value)),
             setUsersInRoom: value => dispatch(setUsersInRoom(value))}
};

const mapStateToProps = state => {
    return { users: state.roomsReducer.usersInRoom }
};

class Users extends Component {
    constructor(props){
        super(props);
        this.leaveRoom = this.leaveRoom.bind(this);
        this.roomID = storageService.getFromStorage("RoomID");
    }

    componentWillMount() {
        roomService.getUsersInRoom(this.roomID).then(res => {
            this.props.setUsersInRoom(res.users);
        });
        wsService.subscribeToRoomUsers(this.roomID)
    }

    componentWillUnmount() {
        wsService.disconnectFromRoomUsers();
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
                    <ul>{users&&users.map((user, key) =>(
                        <li key={key} className="rooms__item rooms__item--no-hover">
                            {user.name}
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);