import React, {Component, Fragment} from "react";
import TodoListE from "./TodoListE";
import './style.css'

class TodoListD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>TodoList</h1>
                    <label htmlFor="inserArea">输入内容</label>
                    <input id='inserArea' className='input' value={this.state.inputValue}
                           onChange={this.handleInputChange}/>
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoListE key={index} content={item} index={index} deleteItem={this.handleItemDelete}/>
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [prevState.list];
            list.splice(index, 1);
            return {list}
        });
    }
}

export default TodoListD;