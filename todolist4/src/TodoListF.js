import React, {Component} from "react";

class TodoListF extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        const {content} = this.props;
        return <li onClick={this.handleDelete}>{content}</li>
    }

    handleDelete(){
        const {deleteitem, index} = this.props;
        deleteitem(index);
    }
}

export default TodoListF;