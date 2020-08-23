import React, {Component} from "react";

import 'antd/dist/antd.css';

import {Input, Button, List} from "antd";

import store from "./store";

class TodoListG extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);

        //d订阅store
        store.subscribe(this.handleStoreChange);
        this.handleClickBtn = this.handleClickBtn.bind(this);
    }


    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input style={{width: '300px', marginRight: '10px'}} placeholder="todo info"
                           value={this.state.inputValue} onChange={this.handleChangeInput}/>
                    <Button type="primary" onClick={this.handleClickBtn}>Submit</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '387px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }

    handleChangeInput(e){
        const action = {
            type: 'change_input',
            value: e.target.value
        };
        store.dispatch(action);
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleClickBtn(){
        const action = {
            type: 'add_item'
        };
        store.dispatch(action);
    }
}

export default TodoListG;