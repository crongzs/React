import React, {Component} from "react";

// import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps.content);
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const {content} = this.props;
        return <div onClick={this.handleClick}>{content}</div>
    }

    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
}

export default TodoItem;