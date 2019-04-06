import React, {Component, Fragment} from 'react';
import Form from "../Form/Form";


export default class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            values: [{key: 'Login', value: null, type: 'text'},
                {key:'Password', value: null, type: 'password'},
                {key:'E-mail', value: null, type: 'e-mail'},
                {key:'Name', value: null, type: 'text'}]
        }
    }
    render(){
        return(
            <Fragment>
                    <p className="text--main">Let's start from creating account</p>
                    <Form values={this.state.values}/>
                    <button className="button button--big">Sign up</button>
            </Fragment>
        )
    }
}