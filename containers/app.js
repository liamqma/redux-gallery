import React, { Component } from 'react';
import Gallery from './gallery';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import galleryReducer from '../reducers/gallery';

const finalCreateStore = compose(
    applyMiddleware(),
    devTools()
)(createStore);

const store = finalCreateStore(galleryReducer);

if (module.hot) {
    module.hot.accept('../reducers/gallery', () =>
            store.replaceReducer(combineReducers(require('../reducers/gallery')))
    );
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    {() => <Gallery /> }
                </Provider>
                <DebugPanel top right bottom>
                    <DevTools store={store}
                              monitor={LogMonitor}
                              visibleOnLoad={true}/>
                </DebugPanel>
            </div>
        );
    }
}
