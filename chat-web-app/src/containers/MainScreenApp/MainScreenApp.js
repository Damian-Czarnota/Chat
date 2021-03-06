import React, {Component, Fragment} from "react";
import Rooms from "../../components/Rooms/Rooms";
import Messages from "../../components/Messages/Messages";
import Users from "../../components/Users/Users";
import * as loggedUserService from "../../services/loggedUserService";
import { setUserInfo, authenticate } from "../../Redux/actions";
import { connect } from "react-redux";
import ProfileConfigurator from "../../components/Modals/ProfileConfigurator/ProfileConfigurator";
import * as storageService from "../../services/storageService";

const mapStateToProps = state => {
    return { isInRoom: state.roomsReducer.isInRoom,
             userInfo: state.userReducer.userInfo};
};

const mapDispatchToProps = dispatch => {
    return { setUserInfo: value => dispatch(setUserInfo(value)),
            authenticate: value => dispatch(authenticate(value))
    };
};

class MainScreenApp extends Component {
     componentDidMount(){
        loggedUserService.get()
            .then((res) => {
                res.status===401
                ? this.handleUnauthorized()
                : this.props.setUserInfo(res);
            });
    }

    handleUnauthorized = () => {
        storageService.deleteFromStorage("Authorization");
        this.props.authenticate(false);
    };

    render() {
        let { userInfo, isInRoom } = this.props;
        return(
            <div className="container">
                <div className="container__application" style={{paddingRight: isInRoom ?  '' : 70 + 'px'}}>
                    <ProfileConfigurator profileImage={userInfo.profileImage}/>
                    {isInRoom&&(
                        <Fragment>
                            <Users />
                            <Messages messages={this.messages} />
                        </Fragment>
                    )}
                    {!isInRoom&&(
                        <Fragment>
                            <Rooms />
                        </Fragment>

                    )}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreenApp)