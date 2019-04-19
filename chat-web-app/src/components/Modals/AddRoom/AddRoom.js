import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import { prepareFormData } from "../../../utils/utils";
import "../modals.scss";
import Form from "../../Form/Form";
import {store} from "../../../Redux/store";
import * as wsService from '../../../services/websocketService';

const ModalTrigger = ({onOpen}) => <button className="btn circle circle--white" onClick={onOpen}><i className="fas fa-plus"></i></button>;

const ModalContent = ({onClose, addRoom, values}) => {
    return createPortal(
        <aside className="cover">
            <div className="modal">
                <div className="modal__header">
                    <h3 className="title">Add room</h3>
                    <button className="modal__close circle circle--white" aria-label="Close Modal" onClick={onClose}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="modal__body">
                    <Form values={values} />
                    <button className="button" onClick={addRoom}>Add room</button>
                </div>
            </div>
        </aside>,
        document.body
    );
};

export default class AddRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [{key: 'name', name: 'Name', type: 'text'}
            ],
            isOpen: false
        };
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.addRoom = this.addRoom.bind(this);
    }

    onOpen = () => {
        this.setState({ isOpen: true });
    };

    onClose = () => {
        this.setState({ isOpen: false });
    };

    addRoom = () => {
        let params = prepareFormData(store.getState().formReducer.values);
        wsService.createRoom(params);
        this.onClose();
    };

    render() {
        return (
            <Fragment>
                <ModalTrigger onOpen={this.onOpen} />
                {this.state.isOpen&&(
                    <ModalContent onClose={this.onClose} addRoom={this.addRoom} values={this.state.values} />) }
            </Fragment>
        );
    };
}