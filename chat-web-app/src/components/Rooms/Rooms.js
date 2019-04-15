import React, { Component } from "react";
import "./rooms.scss";
import AddRoom from "../Modals/AddRoom/AddRoom";

export default class Rooms extends Component {
    constructor(props){
        super(props);
    }
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
                        <li key={key} className="rooms__item"><span>{room.name}</span><span>{room.users.length}&nbsp;<i className="fa fa-users"/> </span></li>
                    ))}
                    </ul>
                    {rooms.length===0&&(
                        <p className="info-text">Start from adding a new room :)</p>)}
                </div>
            </div>
        )
    }
}