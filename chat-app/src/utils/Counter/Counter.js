import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.scss';

export default class Counter extends Component {

    static propTypes = {
        endingNumber: PropTypes.number.isRequired,
        interval: PropTypes.number
    };

    constructor(props){
        super(props);
        let { endingNumber, interval } = this.props;
        this.state = {
            endingNumber: endingNumber,
            number: 0,
            interval: interval | 90
        };
        this.count = this.count.bind(this);
    }

    componentDidMount() {
        this.count();
    }

    count = () => {
        let { endingNumber, number, interval } = this.state;
        setInterval(() =>{
            if(endingNumber >= number)
                this.setState({number:number++});
        },interval)
    };

    render() {
        let { number } = this.state;
        return(
            <span>{number}</span>
        )
    }
}