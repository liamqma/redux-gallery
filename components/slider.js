const React = require('react');
const Slide = require('./slide');

const speed = 400;

export default class Slider extends React.Component {
    render() {
        var sliderStyle = {
            width: this.props.slideWidth + 'px',
            height: this.props.slideHeight + 'px'
        };
        var wrapperStyle = {
            width: this.props.slideWidth * this.props.slides.length + 'px',
            height: this.props.slideHeight + 'px',
            transform: 'translate3d(-' + (this.props.index * this.props.slideWidth) + 'px, 0px, 0px)',
            transitionDuration: speed + 'ms'
        };

        return (
            <div
                className='slider'
                style={sliderStyle}
                >
                <div className='slider__wrapper' style={wrapperStyle}>
                    {this.props.slides.map((slide, i) => {
                        return <Slide width={this.props.slideWidth} key={i} image={slide.image}/>
                    })}
                </div>
            </div>
        );
    }
};