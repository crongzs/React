const defaultState = {
    inputValue: '123',
    list: ['hello world', 'hello react']
};

// reducer可以接收state但是绝不能修改state
export default (state = defaultState, action) => {
    // state: 这里的state指store里面，上一次存储的数据
    // action: 指当前所要做的操作(操作类型和新的操作值)
    if (action.type === 'change_input_value') {
        // 深拷贝一个state
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}