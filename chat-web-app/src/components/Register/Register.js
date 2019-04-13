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
            registered: false
        };
        this.register = this.register.bind(this);
        this.showLoginForm = this.showLoginForm.bind(this);
    }

    showLoginForm = () => {
        this.props.register(false);
    };


    register = () => {
        let params = prepareFormData(store.getState().formReducer.values);
        userService.register(params)
            .then(res =>{
                    this.setState({registered:true})
            })
            .catch(error => { alert("Error has occured") })
    };

    render(){
        let { registered } = this.state;
        return(
            <Fragment>
                {!registered&&(
                    <Fragment>
                        <p className="text--main">Let's start from creating account</p>
                        <Form values={this.state.values} handleChange={this.handleChange}/>
                        <button className="button button--big" onClick={this.register}>Sign up</button>
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