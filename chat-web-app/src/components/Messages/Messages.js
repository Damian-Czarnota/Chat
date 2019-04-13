import React, { Component } from 'react';
import "./Messages.scss";
import SendMessage from "../SendMessage/SendMessage";

export default class Messages extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let { messages } = this.props;
        return(
            <div className="messages">
                <div className="messages__header">
                    Pokój 1
                </div>
                <div className="messages__list">
                    {messages&&messages.map((message,key) => (
                        <div key={key} className="message">
                            <p className="message__date">Data</p>
                            <div className="message__content">
                                <div>
                                    {message.content}
                                </div>
                                <div>
                                    <img src="" className="avatar"/>
                                    <p className="message__author">{message.author.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <SendMessage />
            </div>
        )
    }
}