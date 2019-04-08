import React, {Component, Fragment} from 'react';
import Form from "../Form/Form";
import { prepareFormData } from "../../utils/utils";
import {store} from "../../Redux/store";

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            values: [{key: 'login', name: 'Login', type: 'text'},
                {key: 'password', name:'Password', type: 'password'},
                {key: 'e-mail', name:'E-mail', type: 'e-mail'},
                {key: 'name', name:'Name', type: 'text'}]
        };
        this.register = this.register.bind(this);
    }


    register = () => {
        let params = prepareFormData(store.getState().formReducer.values);

    };

    render(){
        return(
            <Fragment>
                    <p className="text--main">Let's start from creating account</p>
                    <Form values={this.state.values} handleChange={this.handleChange}/>
                    <button className="button button--big" onClick={this.register}>Sign up</button>
            </Fragment>
        )
    }
}

export default Register;