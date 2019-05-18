/**
 * Created by Damian.Czarnota on 2019-03-14.
 */

import React, { Component } from 'react';
import AnimationHandler from "../animationHandler/animationHandler";


export default class WhyUs extends Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    render(){
        return(
            <div className="section hidden" id="why_us" ref={this.myRef}>
                <AnimationHandler reference={this.myRef} animation={'why_us--animation'}/>
                <div className="wrapper">
                    <div className="section__description">
                        <h2 className="section__title">Why us?</h2>
                        <p className="section__text section__text--center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tempor libero. Nam convallis mollis massa.
                            Duis tempor, odio vitae pulvinar maximus, arcu justo scelerisque purus, quis interdum elit sapien quis tortor.
                            Nullam vel magna vel orci malesuada convallis nec sit amet justo. Etiam at hendrerit risus, sed ultricies ipsum.
                            Pellentesque in elit id magna sollicitudin imperdiet ac et enim. Cras tincidunt eget tortor id vehicula.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}