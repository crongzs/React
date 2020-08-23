import React, {Component} from "react";
import TodoListF from "./TodoListF";

class TodoListE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}/>
                    <input type="submit" onClick={this.handleSubmit}/>
                </div>
                <div>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return <TodoListF key={index} content={item} index={index} deleteitem={this.handleDeleteItem}/>
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    handleChangeInput(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleSubmit() {
        const list = [...this.state.list, this.state.inputValue];
        this.setState(() => ({
            list: list,
            inputValue: ''
        }))
    }

    handleDeleteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState(() => ({
            list: list
        }))
    }
}

export default TodoListE;