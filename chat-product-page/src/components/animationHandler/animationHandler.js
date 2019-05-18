import React, { Component } from 'react';

export default class AnimationHandler extends Component {


    componentDidMount() {
        window.addEventListener('scroll',this.addAnimation);
    }

    addAnimation = () => {
        if(this.props.reference.current.getBoundingClientRect().top <= (document.documentElement.scrollTop-400)){
            this.props.reference.current.classList.add(this.props.animation);
            this.props.reference.current.classList.remove('hidden')

        }

    };

    render() {
        return null;
    }

}