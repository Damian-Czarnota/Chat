import React, {Component, Fragment} from "react";
import Rooms from "../../components/Rooms/Rooms";
import Messages from "../../components/Messages/Messages";
import Users from "../../components/Users/Users";
import * as roomService from "../../services/roomService";
import * as loggedUserService from "../../services/loggedUserService";
import * as wsService from "../../services/websocketService";
import { addRoom, setUserInfo } from "../../Redux/actions";
import { connect } from "react-redux";
import ProfileConfigurator from "../../components/Modals/ProfileConfigurator/ProfileConfigurator";

const mapStateToProps = state => {
    return { rooms: state.roomsReducer.rooms,
             isInRoom: state.roomsReducer.isInRoom,
             userInfo: state.userReducer.userInfo};
};

const mapDispatchToProps = dispatch => {
    return { setUserInfo: value => dispatch(setUserInfo(value)),
            addRooms: value => dispatch(addRoom(value))};
};

class MainScreenApp extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        loggedUserService.get()
            .then((res) => {
                this.props.setUserInfo(res);
            });
        roomService.getRooms()
            .then(({rooms}) => {
               this.props.addRooms(rooms) ;
            });
        wsService.subscribeToRooms();
    }

    render() {
        let { rooms, userInfo, isInRoom } = this.props;
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
                        <Rooms rooms={rooms} />
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