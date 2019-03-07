/**
 * Created by Damian.Czarnota on 2019-03-05.
 */

import React, {Component} from 'react';
import './MainScreen.scss';

export default class MainScreen extends Component{

    componentDidMount(){
        this.renderTexts();
    }

    renderTexts = () =>{
        let textInput = document.querySelector('.text-rotator');
        let elements = ['smart','modern','the best!'];


        setTimeout(()=>{
            this.addLetter(textInput,elements[0],0);
        },3000)

    };

    addLetter = (target,element,index) =>{
        target.innerText=element.substring(0,index)
    };

    render(){
        return(
            <div className="container">
                <div className="container__text">
                    <h1>Our chat is <span className="text-rotator"> </span><span className="blink">|</span></h1>
                </div>
            </div>
        )
    }
}