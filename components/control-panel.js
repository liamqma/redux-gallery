const React = require('react');

export default class ControlPanel extends React.Component {

    state = {
        image: '',
        size: ''
    };

    changeImage = (e) => {

        this.setState({
            image: e.target.value
        });

    };

    changeSize = (e) => {

        this.setState({
            size: e.target.value
        });

    };

    moveTo = () => {
        this.props.addSlide(this.state.image);
    };

    changeWindowSize = () => {
        this.props.changeWindowSize(this.state.size);
    };

    render() {
        return (
            <div className='well'>
                <p>
                    <a onClick={this.props.moveLeft} className="btn btn-default" href="#" role="button">Move Left</a>
                    &nbsp;
                    <a onClick={this.props.moveRight} className="btn btn-default" href="#" role="button">Move Right</a>
                </p>

                <p>
                    <input  className='form-control' value={this.state.image} type='text' placeholder='image' onChange={this.changeImage}/>
                    &nbsp;
                    <a onClick={this.moveTo} className="btn btn-default" href="#" role="button">Add Slide</a>
                </p>
                <p>
                    <input  className='form-control' value={this.state.size} type='text' placeholder='window size' onChange={this.changeSize}/>
                    &nbsp;
                    <a onClick={this.changeWindowSize} className="btn btn-default" href="#" role="button">Change</a>
                </p>
            </div>
        );
    }
};