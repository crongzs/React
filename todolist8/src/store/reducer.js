import {CHANGE_INPUT_VALUE, ADD_ITEAM, DELETE_ITEAM} from "./actionType";

const defaultState = {
    inputValue: 'Hello ',
    list: ['Hello React', 'Hello Python', 'Hello Java']
};

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEAM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DELETE_ITEAM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}