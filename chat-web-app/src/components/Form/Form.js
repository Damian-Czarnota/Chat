import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';
import './Form.scss';

export default class Form extends Component {
    static propTypes={
        values:PropTypes.array.isRequired
    };
    constructor(props){
        super(props);
        this.state = {
            values: this.props.values
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) =>{
        let { target } = event;
        let { name } = target;
        this.setState({
            values: update(this.state.values,{[name]:{value: {$set: target.value}}})
        })
    };

    render() {
        let { values } = this.state;
        return(
            <form className="form">
                {values&&values.map((value,key) =>(
                    <div key={key} className="form__box">
                        <input className="form__input" name={key} placeholder={value.key} type={value.type} onChange={this.handleChange} required />
                        <label className="form__label">{value.key}</label>
                    </div>
                ))}
            </form>
        )
    }
}