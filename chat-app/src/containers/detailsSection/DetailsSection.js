/**
 * Created by Damian.Czarnota on 2019-03-14.
 */

import React, { Component, Fragment } from 'react';
import WhyUs from '../../components/whyUs/WhyUs';
import Technologies from '../../components/technologies/Technologies';
import Register from '../../components/register/Register';

export default class DetailsSection extends Component {

    render(){
        return(
                <Fragment>
                    <WhyUs />
                    <Technologies />
                    <Register />
                </Fragment>
            )
    }
}