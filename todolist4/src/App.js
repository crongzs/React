import React, {Component, Fragment} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button onClick={this.handleBtnClick}>点击提交</button>
                </div>
                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index} onClick={this.handleDeleteItem.bind(this, index)}>{item}</li>
                    })}
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState({
            inputValue: value
        })
    }

    handleBtnClick() {
        const list = [...this.state.list, this.state.inputValue];
        this.setState({
            list: list,
            inputValue: ''
        })
    }

    handleDeleteItem(index){
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list:list
        })
    }
}


export default App;
