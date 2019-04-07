import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

export default class Form extends Component {
    static propTypes={
        values: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired
    };
    constructor(props){
        super(props);
        this.state = {
            values: this.props.values
        };
    }

    render() {
        let { values } = this.state;
        return(
            <form className="form">
                {values&&values.map((value,key) =>(
                    <div key={key} className="form__box">
                        <input className="form__input" name={key} placeholder={value.name} type={value.type} onChange={this.props.handleChange} required />
                        <label className="form__label">{value.name}</label>
                    </div>
                ))}
            </form>
        )
    }
}