import {createStore, applyMiddleware} from "redux";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSaga);

export default store;