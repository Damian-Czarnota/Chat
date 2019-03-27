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
            interval:interval,
            text:''
        }
    }

    componentDidMount(){
        this.renderTexts(0);
    }

    renderTexts = (index) =>{
        let { elements, interval } = this.state;

        if(index===this.state.elements.length)
            index=0;

        this.addLetter(elements[index], interval, index);

    };

    addLetter = (message, speed,index) =>{
        let i = 0;
        let interval = setInterval(() => {
            let { text } = this.state;
            this.setState({text:text+= message.charAt(i)});
            i++;
            if (i > message.length){
                clearInterval(interval);
                this.removeLetter(message, speed,index);
            }
        }, speed);
    };

    removeLetter = (message,speed,index) =>{
        let i = message.length;
        let interval = setInterval(() =>{
            this.setState({text:message.substr(0,i)});
            i--;
            if(i<0){
                this.setState({text:''});
                clearInterval(interval);
                this.renderTexts(index+1)
            }
        },speed)
    };

    render() {
        let { text } = this.state;
        return(
            <Fragment>
                {(<span className="text-rotator">
                    {text}</span>)}
                    <span className="blink">|</span>
            </Fragment>
        )
    }

}