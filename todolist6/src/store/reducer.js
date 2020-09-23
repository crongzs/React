import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM, INITLIST} from "./actionType";

const defaultState = {
    inputValue: 'Hello',
    list: ['Hello World', 'Hello React', 'Hello Redux']
};

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newStore = JSON.parse(JSON.stringify(state));
        newStore.inputValue = action.value;
        return newStore;
    }

    if (action.type === SUBMIT_ITEM) {
        const newStore = JSON.parse(JSON.stringify(state));
        newStore.list.push(newStore.inputValue);
        newStore.inputValue = '';
        return newStore;
    }

    if (action.type === DELETE_ITEM) {
        const newStore = JSON.parse(JSON.stringify(state));
        newStore.list.splice(action.index, 1);
        return newStore;
    }

    if (action.type === INITLIST){
        const newStore = JSON.parse(JSON.stringify(state));
        newStore.list = action.data;
        return newStore;
    }

    return state;
}