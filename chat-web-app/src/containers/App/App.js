import React, {Component, Fragment} from 'react';
import './App.scss';
import { withRouter  } from 'react-router-dom'
import Authenticate from "../Authenticate/Authenticate";
import { authenticate, isAdmin, setUserInfo } from '../../Redux/actions';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { authenticated: state.authenticateReducer.authenticated };
};

const mapDispatchToProps = dispatch => {
    return {authenticate: value => dispatch(authenticate(value)),
        setUserInfo: value => dispatch(setUserInfo(value)),
        isAdmin: value => dispatch(isAdmin(value))};
};

class App extends Component {

  componentDidMount(){
    const spinner = document.querySelector('.loading');
    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    }
  }

  componentWillMount() {
      this.props.authenticate(false)
  }

    render() {
    return (
      <Fragment>
          {this.props.authenticated!=null&&(
              <Authenticate authenticated={this.props.authenticated}/>
          )}
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
