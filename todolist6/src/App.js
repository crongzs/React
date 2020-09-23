import React, {Component} from "react";
import "antd/dist/antd.css"
import store from "./store";
import {
    getChangeInputVlueAction,
    getSubmitItemAction,
    getDeleteItemAction,
    getTodoListAction
} from "./store/actionCreators";
import AppUI from "./AppUI";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <AppUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleDeleteItem={this.handleDeleteItem}
            />
        )
    }

    componentDidMount() {
        const action = getTodoListAction();
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = getChangeInputVlueAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = getSubmitItemAction();
        store.dispatch(action);
    }

    handleDeleteItem(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

}

export default App;