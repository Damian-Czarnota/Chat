/**
 * Created by Damian.Czarnota on 2019-03-05.
 */

import React, {Component} from 'react';
import './MainScreen.scss';
import RenderLetterByLetter from '../../utils/RenderLetterByLetter/RenderLetterByLetter';
import StartUsingButton from '../../components/startUsingButton/StartUsingButton';

export default class MainScreen extends Component {



    render(){
        return(
            <div className="container">
                <div className="container__text">
                    <h1 className="container__header">Our chat is <RenderLetterByLetter
                        elements={['smart.','modern.','the best!']}
                        interval={300}/>
                    </h1>
                    <h2>Just log in and start chatting with anyone!</h2>
                    <StartUsingButton />
                </div>
            </div>
        )
    }
}