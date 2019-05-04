import React, {Component, Fragment} from 'react';
import Form from "../Form/Form";
import { prepareFormData } from "../../utils/utils";
import {store} from "../../Redux/store";
import * as userService from "../../services/userService";
import {register} from "../../Redux/actions";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return { register: value => dispatch(register(value)) };
};

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            values: [{key: 'username', name: 'Login', type: 'text'},
                {key: 'password', name:'Password', type: 'password'},
                {key: 'matchingPassword', name:'Repeat password', type: 'password'},
                {key: 'email', name:'E-mail', type: 'e-mail'},
                {key: 'name', name:'Name', type: 'text'}],
            registered: false,
            usernameIsTaken: false,
            emailIsTaken: false,
            invalidEmail: false,
            passwordsDoesntMatch: false
        };
        this.register = this.register.bind(this);
        this.showLoginForm = this.showLoginForm.bind(this);
        this.resetErrors = this.resetErrors.bind(this);
    }

    showLoginForm = () => {
        this.props.register(false);
    };

    resetErrors = () => {
        this.setState({usernameIsTaken: false,
            emailIsTaken: false,
            invalidEmail: false,
            passwordsDoesntMatch: false})
    };

    register = () => {
        this.resetErrors();
        let params = prepareFormData(store.getState().formReducer.values);
        userService.register(params)
            .then(res =>{
                    this.setState({registered:true})
            })
            .catch(error => {
                error.then(e => {
                    switch(e.code) {
                        case 2:
                            this.setState({usernameIsTaken: true});
                            break;
                        case 3:
                            this.setState({emailIsTaken: true});
                            break;
                    }
                    if(e.errors)
                        e.errors.forEach(item => {
                            if(item.code==="ValidEmail")
                                this.setState({invalidEmail: true});
                            if(item.code==="PasswordMatches")
                                this.setState({passwordsDoesntMatch: true});
                        })
                })
            })
    };

    render(){
        let { registered, usernameIsTaken, emailIsTaken, passwordsDoesntMatch, invalidEmail } = this.state;
        return(
            <Fragment>
                {!registered&&(
                    <Fragment>
                        <p className="text--main">Let's start from creating account</p>
                        <Form values={this.state.values} handleChange={this.handleChange}/>
                        {usernameIsTaken&&(
                            <p className="text--danger">Username already is in use</p>
                        )}
                        {emailIsTaken&&(
                            <p className="text--danger">Email already is in use</p>
                        )}
                        {passwordsDoesntMatch&&(
                            <p className="text--danger">Your passwords doesn't match</p>
                        )}
                        {invalidEmail&&(
                            <p className="text--danger">Please type valid mail</p>
                        )}
                        <button className={`button button--big
                        ${usernameIsTaken||emailIsTaken||passwordsDoesntMatch||invalidEmail
                            ? 'button--danger error--animation'
                            : ''}` }
                        onClick={this.register}>Sign up</button>
                    </Fragment>
                )}
                {registered&&(
                    <Fragment>
                        <p className="text--second">Thank's for creating account!</p>
                        <button className="button button--link" onClick={this.showLoginForm}>Log in!</button>

                    </Fragment>
                )}

            </Fragment>
        )
    }
}

export default connect(null, mapDispatchToProps)(Register)