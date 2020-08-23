import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM} from "./actionTypes"

const defaultState = {
    inputValue: 'Hello ...',
    list: ['Hello World', 'Hello React']
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
        newState.list.splice(action.index, 1);
        // const list = [...newState.list];
        // list.splice(action.value, 1);
        // newState.list = list;
        return newState
    }
    return state;
}