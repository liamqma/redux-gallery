'use strict';
var React = require('react');

var Slide = React.createClass({
    render: function () {

        return (
            <div className='slider__slide'>
                <img style={{width: this.props.width}} src={this.props.image}/>
            </div>
        );
    }
});

module.exports = Slide;
