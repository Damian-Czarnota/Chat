import React, { Component } from 'react';
import Counter from '../../utils/Counter/Counter';
import './NumbersSection.scss';

export default class NumbersSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            config:[{title:'Registered users',endingNumber:140, interval:90, icon:'fas fa-user-check'},
                {title:'Written messages',endingNumber:500, interval:50, icon:'far fa-envelope-open'},
                {title:'Active users',endingNumber:5, interval:150, icon:'fas fa-users'},
                {title:'Project\'s collaborators',endingNumber:1, interval:600, icon:'fas fa-bug'}
            ]
        }
    }

    render() {
        let { config } = this.state;
        return(
            <div className="section section--numbersSection" id="about_us">
                <div className="wrapper">
                    <div className="section__description">
                        <h2 className="section__title section__title--opacity section__title--blue">Our service in numbers</h2>
                    </div>
                    <div className="section__boxes">
                            {config&&(config.map(item =>(
                                    <div className="box box--4" key={item.title}>
                                        <div className="box__wrapper">
                                            <span className={`${item.icon} box__icon`}></span>
                                            <Counter endingNumber={item.endingNumber} interval={item.interval} />
                                            <p className="box__subtitle">{item.title}</p>
                                        </div>
                                    </div>
                                ))
                            )}
                    </div>
                </div>
            </div>
        )
    }

}