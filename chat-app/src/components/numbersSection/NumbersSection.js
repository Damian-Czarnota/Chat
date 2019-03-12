import React, { Component } from 'react';
import Counter from '../../utils/Counter/Counter';
import './NumbersSection.scss';

export default class NumbersSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            config:[{title:'Registered users',endingNumber:140, interval:90},
                {title:'Written messages',endingNumber:500, interval:50},
                {title:'Active users',endingNumber:5, interval:150},
                {title:'Project\'s collaborators',endingNumber:1, interval:600}
            ]
        }
    }

    render() {
        let { config } = this.state;
        return(
            <div className="numbersSection">
                <div className="numbersSection__numbers">
                    {config&&(config.map(item =>(
                            <div className="box" key={item.title}>
                                <div className="box__wrapper">
                                    <span class="far fa-envelope-open box__icon"></span>
                                    <Counter endingNumber={item.endingNumber} interval={item.interval} />
                                    <p className="box__subtitle">{item.title}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        )
    }

}