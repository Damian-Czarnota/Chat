import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import "../modals.scss";
import * as loggedUserService from '../../../services/loggedUserService';
import * as storageService from "../../../services/storageService";
import DisplayAvatar from "../../DisplayAvatar/DisplayAvatar";
import {authenticate, setUserInfo} from "../../../Redux/actions";
import { connect } from "react-redux";
import * as wsService from "../../../services/websocketService";

const ModalTrigger = ({onOpen, profileImage}) => <button className="circle profile-changer" onClick={onOpen}>
    <DisplayAvatar size={42} profileImage={profileImage}/>
</button>;

const ModalContent = ({onClose, changeAvatar, profileImage, logout}) => {
    return createPortal(
        <aside className="cover">
            <div className="modal">
                <div className="modal__header">
                    <h3 className="title">Change your avatar</h3>
                    <button className="modal__close circle circle--white" aria-label="Close Modal" onClick={onClose}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="modal__body">
                    <DisplayAvatar profileImage={profileImage} size={96}/>
                    <div>
                        <button className="button">
                            <label>Change<input type="file" accept="image/*" onChange={(e) => changeAvatar(e)} /></label>
                        </button>
                        <button className="button button--danger" onClick={logout}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </aside>,
        document.body
    );
};


const mapDispatchToProps = dispatch => {
    return {setUserInfo: value => dispatch(setUserInfo(value)),
            authenticate: value => dispatch(authenticate(value))};
};


class ProfileConfigurator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.changeAvatar = this.changeAvatar.bind(this);
    }

    onOpen = () => {
        this.setState({ isOpen: true });
    };

    onClose = () => {
        this.setState({ isOpen: false });
    };

    changeAvatar = (event) =>{
        let file;
        if(event.target) file = event.target.files;
        else if(event.srcElement) file = event.srcElement.files;
        if (file.nodeType === 3)
            file = file.parentNode;
        if (!file) {
            return;
        }
        loggedUserService.change(file).then(
            res =>{
                this.props.setUserInfo(res)
            }
        )
    };

    logout = () => {
        storageService.deleteFromStorage("Authorization");
        this.props.authenticate(false);
        wsService.disconnectFromRooms();
    };

    render() {
        let { profileImage } = this.props;
        return (
            <Fragment>
                <ModalTrigger onOpen={this.onOpen} profileImage={profileImage} />
                {this.state.isOpen&&(
                    <ModalContent onClose={this.onClose} changeAvatar={this.changeAvatar} profileImage={profileImage} logout={this.logout} />) }
            </Fragment>
        );
    };
}

export default connect(null,mapDispatchToProps)(ProfileConfigurator);