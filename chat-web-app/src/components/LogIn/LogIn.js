import React, {Component, Fragment} from 'react';
import Form from "../Form/Form";
import { connect } from "react-redux";
import { register } from "../../Redux/actions";
import { prepareFormData } from "../../utils/utils";
import { store } from "../../Redux/store";

const mapDispatchToProps = dispatch => {
    return { register: value => dispatch(register(value)) };
};

class LogIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            values: [{key: 'login', name:'Login', value: null, type: 'text'},
                {key: 'password', name: 'Password', value: null, type: 'password'}]
        };
        this.showRegisterForm = this.showRegisterForm.bind(this);
        this.logIn = this.logIn.bind(this);
    }

    showRegisterForm = () =>{
        this.props.register(true);
    };

    logIn = () => {
      let params = prepareFormData(store.getState().formReducer.values);

    };

    render(){
        return(
            <Fragment>
                    <p className="text--main">Log in into your account!</p>
                    <Form values={this.state.values} />
                    <button className="button button--big" onClick={this.logIn}>Start chatting!</button>
                    <p className="text--second">Need an account? <button className="button button--link" onClick={this.showRegisterForm}>Sign up</button></p>
            </Fragment>
        )
    }
}

export default connect(null, mapDispatchToProps)(LogIn)