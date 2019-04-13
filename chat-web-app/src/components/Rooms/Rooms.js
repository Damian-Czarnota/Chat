import React, { Component } from "react";
import "./rooms.scss";

export default class Rooms extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let { rooms } = this.props;
        return (
            <div className="rooms">
                <div className="rooms__header">
                    Rooms
                </div>
                <div className="rooms__list">
                    <ul>{rooms&&rooms.map((room, key) =>(
                        <li key={key} className="rooms__item"><span>{room.name}</span><span>{room.people}&nbsp;<i className="fa fa-users"/> </span></li>
                    ))}
                    </ul>
                </div>
            </div>
        )
    }
}