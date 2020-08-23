import React, {Component, Fragment} from "react";
import TodoListB from "./TodoListB";

class TodoListA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
        this.handleUpdateList = this.handleUpdateList.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}/>
                    <button onClick={this.handleClickBtn}>点击提交</button>
                </div>
                <TodoListB list={this.state.list} handleUpdateList={this.handleUpdateList}/>
            </Fragment>
        )
    };

    handleChangeInput(e) {
        const value = e.target.value;
        this.setState({
            inputValue: value
        })
    };

    handleClickBtn() {
        const list = [...this.state.list, this.state.inputValue];
        this.setState({
            list: list,
            inputValue: ''
        })
    };

    handleUpdateList(list) {
        this.setState({
            list: list
        })
    }
}

export default TodoListA;