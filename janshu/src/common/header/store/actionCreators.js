import * as constants from './constants';
import axios from 'axios'
import {fromJS} from "immutable";

const getChangeListAction = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    Pages: Math.ceil(data.length / 10)
});

export const getInputFocusAction = () => ({
    type: constants.SEARCH_FOCUS
});

export const getInputBlurAction = () => ({
    type: constants.SEARCH_BLUR
});

export const getMouseEnterAction = () => ({
    type: constants.MOUSE_ENTER
});

export const getMouseLeaveAction = () => ({
    type: constants.MOUSE_LEAVE
});

export const getChangePageAction = (page) => ({
    type: constants.CHANGE_PAGE,
    page: page
});

export const getListAction = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            // const action = getChangeListAction(data.data);
            dispatch(getChangeListAction(data.data));
        }).catch(() => {
            console.log('fail')
        })
    }
};