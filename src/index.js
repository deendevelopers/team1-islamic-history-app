import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import IslamicHistoryApp from './IslamicHistoryApp';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import rootReducer from './store/rootReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

// Router history
const history = createBrowserHistory();

// Root element
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <IslamicHistoryApp/>
      </Router>
    </Provider>,
    rootElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
