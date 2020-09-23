import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from "./store";

const AppTodoList = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(
    AppTodoList,
    document.getElementById('root')
);
