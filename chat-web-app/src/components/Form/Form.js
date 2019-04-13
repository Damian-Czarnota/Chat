import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import {connect} from "react-redux";
import { completeForm } from '../../Redux/actions';

const mapDispatchToProps = dispatch => {
    return { completeForm: value => dispatch(completeForm(value))}
};

class Form extends Component {
    static propTypes={
        values: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            values: this.props.values
        }
    }

    handleChange = (event) => {
        let { target } = event;
        let { name } = target;
        this.props.values[name].value = target.value;
        this.props.completeForm(this.props.values);
    };

    render() {
        let { values } = this.props;
        return(
            <form className="form">
                {values&&values.map((value,key) =>(
                    <div key={key} className="form__box">
                        <input className="form__input" name={key} placeholder={value.name} type={value.type} onChange={this.handleChange} required />
                        <label className="form__label">{value.name}</label>
                    </div>
                ))}
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(Form);