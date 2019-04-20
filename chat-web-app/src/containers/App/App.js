import React, {Component, Fragment} from 'react';
import './App.scss';
import { withRouter  } from 'react-router-dom'
import Authenticate from "../Authenticate/Authenticate";
import { authenticate, isInRoom } from '../../Redux/actions';
import { connect } from "react-redux";
import { getToken } from "../../utils/utils";
import MainScreenApp from "../MainScreenApp/MainScreenApp";
import * as storageService from "../../services/storageService";
import * as wsService from "../../services/websocketService";

const mapStateToProps = state => {
    return { authenticated: state.authenticateReducer.authenticated };
};

const mapDispatchToProps = dispatch => {
    return {authenticate: value => dispatch(authenticate(value)),
            isInRoom: value => dispatch(isInRoom(value))};
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      connected:false
    };
    this.setConnected = this.setConnected.bind(this);
}
  componentDidMount(){
    const spinner = document.querySelector('.loading');
    if (spinner && !spinner.hasAttribute('hidden')) {
      spinner.setAttribute('hidden', 'true');
    }
  }

  componentWillMount() {
    wsService.createConnection(this.setConnected);
      getToken()
          ? this.authenticate()
          : this.props.authenticate(false)

  }

  setConnected = () => {
    this.setState({connected:true})
  };

  authenticate = () => {
    this.props.authenticate(true);
    storageService.getFromStorage("RoomID")
      ? this.props.isInRoom(true)
      : this.props.isInRoom(false)
  };

    render() {
    return (
      <Fragment>
          {!this.props.authenticated&&(
              <Authenticate />
          )}
          {this.props.authenticated&&this.state.connected&&(
              <MainScreenApp />
          )}
      </Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
