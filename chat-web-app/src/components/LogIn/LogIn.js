import React, {Component, Fragment} from 'react';
import Form from "../Form/Form";
import { connect } from "react-redux";
import { register, authenticate } from "../../Redux/actions";
import { prepareFormData } from "../../utils/utils";
import { store } from "../../Redux/store";
import * as userService from "../../services/userService";
import * as storageService from "../../services/storageService";

const mapDispatchToProps = dispatch => {
    return { register: value => dispatch(register(value)),
            authenticate: value => dispatch(authenticate(value))};
};

class LogIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            values: [{key: 'username', name:'Login', value: null, type: 'text'},
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
      userService.login(params)
          .then(res => {
              storageService.saveInStorage("Authorization", `${res.type} ${res.token}`);
              this.props.isAdmin(res.isAdmin);
              this.props.authenticate(true);
          })
          .catch(error => {
              alert('Ops... Something went wrong')
          });
    };

    render(){
        return(
            <Fragment>
                    <p className="text--main">Log in into your account!</p>
                    <Form values={this.state.values} />
                    <button className="button button--big" onClick={this.logIn}>Start chatting!</button>
                    <p className="text--second">Need an account? </p>
                    <button className="button button--link" onClick={this.showRegisterForm}>Sign up</button>
            </Fragment>
        )
    }
}

export default connect(null, mapDispatchToProps)(LogIn);