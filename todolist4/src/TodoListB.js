import React, {Component} from "react";

class TodoListB extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {list} = this.props;
        return (
            <div>
                <ul>
                    {list.map((item, index) => {
                        return <li key={index} onClick={this.halderItemDelete.bind(this, index)}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }

    halderItemDelete(index) {
        console.log(index);
        const {handleUpdateList, list} = this.props;
        const newlist = [...list];
        newlist.splice(index, 1);
        handleUpdateList(newlist);
    }
}

export default TodoListB;