import React, {Component, Fragment} from 'react';
import Form from "../Form/Form";
import update from "react-addons-update";
import {prepareFormData} from "../../utils/utils";


export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            values: [{key: 'Login', value: null, type: 'text'},
                {key:'Password', value: null, type: 'password'},
                {key:'E-mail', value: null, type: 'e-mail'},
                {key:'Name', value: null, type: 'text', AC: 'infinity'}]
        };
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
    }

    handleChange = (event) =>{
        let { target } = event;
        let { name } = target;
        this.setState({
            values: update(this.state.values,{[name]:{value: {$set: target.value}}})
        });
    };

    register = () => {
        let params = prepareFormData(this.state.values);

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