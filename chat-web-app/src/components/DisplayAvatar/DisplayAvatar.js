import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";


export default class DisplayAvatar extends Component{

    static propTypes = {
        size: PropTypes.number.isRequired
    };

    render(){
        let { profileImage, size } = this.props;
        return(
            <Fragment>
                {!profileImage&&(
                    <i className="fa fa-user default-avatar" style={{fontSize:(size/2)+'px'}}></i>
                )}
                {profileImage&&(
                    <img src={`data:image/png;base64,${profileImage}`}  alt="Your avatar" style={{width:size+'px',height:size+'px'}} className="circle" />
                )}
            </Fragment>
        )
    }
}