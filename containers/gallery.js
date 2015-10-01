import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GalleryActions from '../actions/gallery';

import Thumbnails from '../components/thumbnails'
import Slider from '../components/slider'
import ControlPanel from '../components/control-panel'

require('./index.css');

class Gallery extends Component {

    render() {
        const { slides, index } = this.props;

        const actions = bindActionCreators(GalleryActions, this.props.dispatch);

        if(this.props.windowWidth > 1000) {

            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Thumbnails {...actions} {...this.props} />
                            </div>
                            <div className="col-md-6">
                                <Slider {...this.props} />
                            </div>
                            <div className="col-md-3">
                                {slides[index].text}
                            </div>
                        </div>
                    </div>
                    <ControlPanel {...actions} />
                </div>
            )
        } else {
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Slider {...this.props} />
                            </div>
                            <div className="col-md-12">
                                {slides[index].text}
                            </div>
                        </div>
                    </div>
                    <ControlPanel {...actions} />
                </div>
            )
        }
    }
}

function mapState(state) {
    return state;
}

export default connect(mapState)(Gallery);
