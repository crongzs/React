import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM, INIT_LIST} from "./actionTypes"

const defaultState = {
    inputValue: '',
    list: []
};

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === SUBMIT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        // newState.list.push(action.value);
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        // newState.list.splice(action.value, 1);
        console.log('index:',action.index);
        newState.list.splice(action.index, 1);
        // const list = [...newState.list];
        // list.splice(action.value, 1);
        // newState.list = list;
        return newState;
    }

    if (action.type === INIT_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }
    return state;
}