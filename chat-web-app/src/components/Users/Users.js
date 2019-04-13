import React, { Component } from "react";
import "../Rooms/rooms.scss";

export default class Users extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let { users } = this.props;
        return (
            <div className="rooms">
                <div className="rooms__header">
                    Users
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