import React, { Component } from 'react';
import './SendMessage.scss';

export default class SendMessage extends Component {
    render() {
        return (
            <div className="telegraph">
                <textarea placeholder="Type your message" className="telegraph__textarea"></textarea>
                <button className="button">Send</button>
            </div>
        )
    }
}