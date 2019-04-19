import React, {Component, Fragment} from 'react';
import './App.scss';
import { withRouter  } from 'react-router-dom'
import Authenticate from "../Authenticate/Authenticate";
import { authenticate } from '../../Redux/actions';
import { connect } from "react-redux";
import { getToken } from "../../utils/utils";
import MainScreenApp from "../MainScreenApp/MainScreenApp";


const mapStateToProps = state => {
    return { authenticated: state.authenticateReducer.authenticated };
};

const mapDispatchToProps = dispatch => {
    return {authenticate: value => dispatch(authenticate(value))};
};

class App extends Component {

  componentDidMount(){
    const spinner = document.querySelector('.loading');
    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    }
  }

  componentWillMount() {
      getToken()
          ? this.props.authenticate(true)
          : this.props.authenticate(false)
  }

    render() {
    return (
      <Fragment>
          {!this.props.authenticated&&(
              <Authenticate />
          )}
          {this.props.authenticated&&(
              <MainScreenApp />
          )}
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
