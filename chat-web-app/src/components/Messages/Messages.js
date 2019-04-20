import React, { Component } from 'react';
import "./Messages.scss";
import SendMessage from "../SendMessage/SendMessage";
import * as wsService from "../../services/websocketService";
import * as storageService from "../../services/storageService";
import * as messageService from "../../services/messageService";

import {connect} from "react-redux";
import DisplayAvatar from "../DisplayAvatar/DisplayAvatar";
import {addMessages} from "../../Redux/actions";
import {formDate} from "../../utils/utils";


const mapStateToProps = state => {
    return { messages: state.roomsReducer.messages}
};

const mapDispatchToProps = dispatch => {
    return {
        addMessages: value => dispatch(addMessages(value))
    }
};

class Messages extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            roomID: storageService.getFromStorage("RoomID")
        };
        this.messagesEnd = null;
    }

    componentDidMount() {
        wsService.subscribeToRoomMessages(this.state.roomID);
        messageService.get(this.state.roomID).then(res => {
            this.props.addMessages(res);
        });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillUnmount() {
        wsService.disconnectFromRoomMessages(this.state.roomID);
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };


    render() {
        let { roomID } = this.state;
        let { messages } = this.props;
        return(
            <div className="messages">
                <div className="messages__header">
                    {storageService.getFromStorage("RoomName")}
                </div>
                <div className="messages__list">
                    {messages&&messages.map((message,key) => (
                        <div key={key} className={"message " + (message.isMine?"message--background":null)}>
                            <p className="message__date">{formDate(message.date)}</p>
                            <div className="message__content">
                                <div>
                                    {message.content}
                                </div>
                                <div className="col col__align--center col__direction--col">
                                    <DisplayAvatar size={64} profileImage={message.author.profileImage} />
                                    <p className="message__author">{message.author.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div style={{ visible:"left", clear: "both" }}
                         ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
                <SendMessage roomID={roomID} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)