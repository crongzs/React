import React, {Component} from "react";

class TodoListD extends Component {
    constructor(props) {
        super(props);
        this.ItemDelete = this.ItemDelete.bind(this);
    }

    render() {
        const {content} = this.props;
        return <div onClick={this.ItemDelete}>{content}</div>
    };

    ItemDelete() {
        console.log('asdfasdfasfdsadfasdfasdf');
        const {deleteiteam, index} = this.props;
        deleteiteam(index);
    }

}

export default TodoListD;