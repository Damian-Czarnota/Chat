import React, {Component, Fragment} from "react";
import Rooms from "../../components/Rooms/Rooms";
import Messages from "../../components/Messages/Messages";
import Users from "../../components/Users/Users";
import * as loggedUserService from "../../services/loggedUserService";
import { setUserInfo } from "../../Redux/actions";
import { connect } from "react-redux";
import ProfileConfigurator from "../../components/Modals/ProfileConfigurator/ProfileConfigurator";

const mapStateToProps = state => {
    return { isInRoom: state.roomsReducer.isInRoom,
             userInfo: state.userReducer.userInfo};
};

const mapDispatchToProps = dispatch => {
    return { setUserInfo: value => dispatch(setUserInfo(value))};
};

class MainScreenApp extends Component {
     componentDidMount(){
        loggedUserService.get()
            .then((res) => {
                this.props.setUserInfo(res);
            });
    }

    render() {
        let { userInfo, isInRoom } = this.props;
        return(
            <div className="container">
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
                        <div className="advert">
                            <p>Select your room and start chatting now!</p>
                        </div>
                    </Fragment>

                )}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainScreenApp)