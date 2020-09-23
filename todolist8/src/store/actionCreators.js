import {CHANGE_INPUT_VALUE, ADD_ITEAM, DELETE_ITEAM} from "./actionType";

export const getChangeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddIteamAction = () => ({
    type: ADD_ITEAM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEAM,
    index
});