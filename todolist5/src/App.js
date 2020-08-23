import React, {Component} from "react";
import 'antd/dist/antd.css';
// import {Input, Button, List} from "antd";
import store from "./store";
// import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM} from "./store/actionTypes"
import {getChangeInputValueAction, getSubmitItemAction, getDeleteItemAction} from "./store/actionCreators"
import AppUI from "./AppUI"
import axios from "axios";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);

    }

    render() {
        return (
            <AppUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemClick={this.handleItemClick}
            />
        )
    }

    componentDidUpdate() {
        console.log('------------');
        axios.get('http://127.0.0.1:8000/demo-1/',).then((res) => {
            console.log(res);
        })
    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // };
        const action = getChangeInputValueAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        // const action = {
        //     type: SUBMIT_ITEM,
        //     // value: this.state.inputValue
        // };
        const action = getSubmitItemAction();
        store.dispatch(action);
    }

    handleItemClick(index) {
        // const action = {
        //     type: DELETE_ITEM,
        //     // value: index
        //     index
        // };
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default App;