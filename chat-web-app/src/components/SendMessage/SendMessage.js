import React, { Component } from 'react';
import './SendMessage.scss';
import * as messageService from "../../services/messageService";
import PropTypes from 'prop-types';

export default class SendMessage extends Component {
    static propTypes = {
        roomID: PropTypes.string.isRequired
    };

    constructor(props){
        super(props);
        this.state = {
            content:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = ({target}) => {
        this.setState({content: target.value})
    };

    sendMessage = () => {
        messageService.sendMessage(this.state.content, this.props.roomID).then(
            res => {
                this.setState({content: ''})
            }
        )
    };

    render() {
        return (
            <div className="telegraph">
                <textarea placeholder="Type your message" value={this.state.content} className="telegraph__textarea" onChange={this.handleChange}></textarea>
                <button className="button" onClick={this.sendMessage}>Send</button>
            </div>
        )
    }
}