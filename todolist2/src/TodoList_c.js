import React, {Component, Fragment} from "react";
import TodoItem from "./TodoItem";
// import Test from "./Test";

class TodoList extends Component {
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
                    <input className='input' type="text" value={this.state.inputValue}
                           onChange={this.handleInputChange}/>
                    <input type="submit" onClick={this.handleBtnClick}/>
                </div>
                <ul>
                    {this.getItem()}
                </ul>
                {/*<Test content={this.state.inputValue}/>*/}
            </Fragment>
        )
    }

    getItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    <TodoItem content={item} index={index} deleteItem={this.handleItemDelete}/>
                </div>
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        const list = [...this.state.list, this.state.inputValue];
        this.setState(()=>({
            list:list,
            inputValue: ''
        }))
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState((prevState)=>({
            list:list
        }))
    }
}


export default TodoList;