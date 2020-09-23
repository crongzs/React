import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM, INIT_LIST} from "./actionTypes"
import axios from "axios";
// import store from "./store";

export const getChangeInputValueAction = (value) => ({
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

export const initListAction = (data) => ({
    type: INIT_LIST,
    data
});

export const getTodoListAction = () => {

    // 当调用一个方法生成一个函数的action时，这个函数能够接收到store的dispatch方法
	return (dispatch) => {
	        axios.get('http://127.0.0.1:8000/demo-1/',).then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        });
	}
};