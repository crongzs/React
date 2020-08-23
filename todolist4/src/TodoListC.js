import React, {Component} from "react";
import TodoListD from "./TodoListD";

class TodoListC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
        this.hanldeDeleteItem = this.hanldeDeleteItem.bind(this);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleChangeInput}/>
                    <input type="button" value="提交" onClick={this.handleClickSubmit}/>
                </div>
                <div>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return <div key={index}>
                                <TodoListD content={item} index={index} deleteiteam={(this.hanldeDeleteItem)}/>
                            </div>
                        })}
                    </ul>
                </div>
            </div>

        )
    };

    handleChangeInput(e) {
        console.log('asdfasdfasdfasdfas000000000asdfasdsa');
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    };

    handleClickSubmit() {
        const list = [...this.state.list, this.state.inputValue];
        console.log(list);
        this.setState(() => ({
            list: list,
            inputValue: ''
        }))
    };

    hanldeDeleteItem(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState((prevState) => ({
            list: list
        }))
    }

}

export default TodoListC;