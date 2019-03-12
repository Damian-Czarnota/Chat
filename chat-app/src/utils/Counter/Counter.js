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
            interval: interval | 70
        };
        this.count = this.count.bind(this);
        this.increase = this.increase.bind(this);
    }

    componentDidMount() {
        this.count(this.increase);
    }

    count = (callback) => {
        let { endingNumber, number, interval } = this.state;
        let internalCallback = function(number, interval) {
            return function() {
                if (endingNumber >= ++number) {
                    if(number>endingNumber*0.8)
                        interval*=1.2;
                    setTimeout(internalCallback, interval);
                    callback();
                }
            }
        }(number,interval);
        setTimeout(internalCallback,interval);
    };

    increase = () =>{
        let { endingNumber, number } = this.state;
        if(endingNumber >= number){
            this.setState({number:number+1});
        }
    };

    render() {
        let { number } = this.state;
        return(
            <span className="counter">{number}</span>
        )
    }
}