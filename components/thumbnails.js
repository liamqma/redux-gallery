import React, { Component } from 'react';

export default class extends Component {

    moveTo = (i) => {
        this.props.moveTo(i);
    };

    render() {
        return (
            <ul>
                {this.props.slides.map((slide, i) => {
                    return <li className={i===this.props.index?'selected':''} key={i}><a
                        onClick={this.moveTo.bind(null, i)} className='thumbnail'><img
                        className="img-responsive" src={slide.image}/></a></li>
                })}
            </ul>
        )
    }
}
