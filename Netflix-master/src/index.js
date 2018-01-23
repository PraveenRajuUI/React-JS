import React from 'react';
import {
    render
} from 'react-dom';
import App from './containers/App';
import configureStore from './reducers/store';
import {
    Provider
} from 'react-redux';
//ReactDOM.render(<App />, document.getElementById('root'));

const store = configureStore();

render( <Provider store = { store } >
          <App />
        </Provider>,
    document.getElementById('root')
);
