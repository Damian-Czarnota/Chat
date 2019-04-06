import React, { Component } from 'react';
import LogIn from "../../components/LogIn/LogIn";
import Register from "../../components/Register/Register";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { register: state.authenticateReducer.register };
};

class Authenticate extends Component {
    static propTypes = {
        authenticated: PropTypes.bool.isRequired
    };

    render() {
        let { authenticated, register } = this.props;

        return(
            <section className="auth">
                <div className="auth__box">
                    {!authenticated&&!register&&(
                        <LogIn />
                    )}
                    {register&&!authenticated&&(
                        <Register />
                    )}
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps)(Authenticate)