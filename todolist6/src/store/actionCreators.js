import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM, INITLIST} from "./actionType";
import axios from "axios";

export const getChangeInputVlueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getSubmitItemAction = () => ({
    type: SUBMIT_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
});

export const getInitListAction = (data) => ({
    type: INITLIST,
    data
});

export const getTodoListAction = () => {
    return (dispatch) => {
        axios.get('http://127.0.0.1:8000/demo-1/').then((res) => {
            const data = res.data;
            const action = getInitListAction(data);
            dispatch(action);
        });
    }
};