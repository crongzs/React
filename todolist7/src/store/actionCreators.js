import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM, INITLIST, GETLIST} from "./actionType";


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

export const getListAction = () => ({
    type: GETLIST
});
