import {takeEvery, put} from 'redux-saga/effects'
import {GETLIST} from "./actionType";
import {getInitListAction} from './actionCreators'
import axios from "axios";


function* getList() {
    try {
        const res = yield axios.get('http://127.0.0.1:8000/demo-1/');
        const action = getInitListAction(res.data);
        yield put(action);
    } catch (e) {
        console.log('request failed')
    }
}

function* todoSaga() {
    yield takeEvery(GETLIST, getList);
}

export default todoSaga;