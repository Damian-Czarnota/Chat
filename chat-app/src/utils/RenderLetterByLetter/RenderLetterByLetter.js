/**
 * Created by Damian.Czarnota on 2019-03-10.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './RenderLetterByLetter.scss';

export default class RenderLetterByLetter extends Component {

    static propTypes = {
        elements: PropTypes.array.isRequired,
        interval: PropTypes.number.isRequired
    };

    constructor(props){
        super(props);
        const {elements, interval} = this.props;
        this.state = {
            elements: elements,
            interval:interval
        }
    }

    componentDidMount(){
        this.renderTexts(0);
    }

    renderTexts = (index) =>{
        let { elements, interval } = this.state;
        let textInput = document.querySelector('.text-rotator');

        if(index===this.state.elements.length)
            index=0;

        this.addLetter(textInput, elements[index], interval, index);

    };

    addLetter = (destination, message, speed,index) =>{
        let i = 0;
        let interval = setInterval(() => {
            destination.innerText += message.charAt(i);
            i++;
            if (i > message.length){
                clearInterval(interval);
                this.removeLetter(destination, message, speed,index);
            }
        }, speed);
    };

    removeLetter = (destination,message,speed,index) =>{
        let i = message.length;
        let interval = setInterval(() =>{
            destination.innerText = message.substr(0,i);
            i--;
            if(i<0){
                destination.innerText='';
                clearInterval(interval);
                this.renderTexts(index+1)
            }
        },speed)
    };

    render() {
        return(
            <Fragment>
                <span className="text-rotator"> </span><span className="blink">|</span>
            </Fragment>
        )
    }

}