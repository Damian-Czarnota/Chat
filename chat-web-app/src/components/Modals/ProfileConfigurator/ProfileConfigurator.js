import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
import "../modals.scss";
import * as loggedUserService from '../../../services/loggedUserService';
import * as storageService from "../../../services/storageService";
import DisplayAvatar from "../../DisplayAvatar/DisplayAvatar";
import {authenticate, setUserInfo} from "../../../Redux/actions";
import { connect } from "react-redux";
import * as wsService from "../../../services/websocketService";
import Form from "../../Form/Form";
import {prepareFormData} from "../../../utils/utils";
import {store} from "../../../Redux/store";

const ModalTrigger = ({onOpen, profileImage}) => <button className="circle profile-changer" onClick={onOpen}>
    <DisplayAvatar size={42} profileImage={profileImage}/>
</button>;

const ModalContent = ({onClose, changeAvatar, profileImage, logout, badCredentials, changePassword, success}) => {

    const values = [{key: 'password', name: 'Old password', value: null, type: 'password'},
                    {key: 'newPassword', name: 'New password', value: null, type: 'password'},
                    {key: 'matchingPassword', name: 'Confirm new password', value: null, type: 'password'}];


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
                    <div>
                        <Form values={values} />
                        {badCredentials&&(
                            <p className="text--danger">You credentials are not valid!</p>
                        )}
                        {success&&(
                            <p className="text--success">Success!</p>
                        )}
                        <button className={`button button--big ${badCredentials?'button--danger error--animation' : ''}` }
                                onClick={changePassword}>Submit</button>
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
            isOpen: false,
            badCredentials: false,
            success: false
        };
        this.changeAvatar = this.changeAvatar.bind(this);
        this.changePassword = this.changePassword.bind(this);
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

    changePassword = () => {

        this.setState({badCredentials: false});
        this.setState({success: false});
        let params = prepareFormData(store.getState().formReducer.values);
        if(params.newPassword!==params.matchingPassword){
            this.setState({badCredentials: true});
            return ;
        }

        loggedUserService.put(params).then(
            res =>{
                this.setState({success: true});
            })
            .catch(e => {
                this.setState({badCredentials: true});
            });
    };

    render() {
        let { profileImage } = this.props;
        return (
            <Fragment>
                <ModalTrigger onOpen={this.onOpen} profileImage={profileImage} />
                {this.state.isOpen&&(
                    <ModalContent onClose={this.onClose} changeAvatar={this.changeAvatar}
                                  profileImage={profileImage} logout={this.logout}
                                    changePassword={this.changePassword}
                                    badCredentials={this.state.badCredentials}
                                    success={this.state.success}/>) }
            </Fragment>
        );
    };
}

export default connect(null,mapDispatchToProps)(ProfileConfigurator);