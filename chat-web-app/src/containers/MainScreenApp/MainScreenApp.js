import React, {Component, Fragment} from "react";
import Rooms from "../../components/Rooms/Rooms";
import Messages from "../../components/Messages/Messages";
import Users from "../../components/Users/Users";

export default class MainScreenApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isInRoom: false
        };
        this.data = [
            { name:'Pokój 1', people:5},
            { name:'Pokój 2', people:13},
            { name:'Pokój 3', people:14},
            { name:'Pokój 4', people:1},
            { name:'Pokój 5', people:0}
        ];
        this.messages = [
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'},
            {author:{name:'Damian', id:15 }, content:'ALe jazda!', date:'2019-09-09'}
        ]

    }
    render() {
        let { isInRoom } = this.state;
        return(
            <div className="container">
                {isInRoom&&(
                    <Fragment>
                        <Users users={this.data}/>
                        <Messages messages={this.messages} />
                    </Fragment>
                )}
                {!isInRoom&&(
                    <Fragment>
                        <Rooms rooms={this.data} />
                        <div className="advert">
                            <p>Select your room and start chatting now!</p>
                        </div>
                    </Fragment>

                )}
            </div>
        )
    }
}