// import React, {Component} from "react";
import React from "react";
// import store from "./store";
import {connect} from 'react-redux';
import {getChangeInputValueAction, getAddIteamAction, getDeleteItemAction} from './store/actionCreators'

// class App extends Component {
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <input type="text" value={this.props.inputValue} onChange={this.props.changeInputValue}/>
//                     <button onClick={this.props.addIteam}>提交</button>
//                 </div>
//                 <ul>
//                     {this.props.list.map((iteam, index) => {
//                         return <li key={index}>{iteam}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }

// 将App改写为一个无状态组件
const App = (props) => {
    const {inputValue, changeInputValue, list, addIteam, deleteIteam} = props;
    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={changeInputValue}/>
                <button onClick={addIteam}>提交</button>
            </div>
            <ul>
                {list.map((iteam, index) => {
                    return <li key={index} onClick={() => {
                        deleteIteam(index)
                    }}>{iteam}</li>
                })}
            </ul>
        </div>
    )
};


// 定义store和组件App连接的规则
const mapStateToProps = (state) => {
    // 将store的内容映射到props
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

// 把store.dispatch 挂载到 props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = getChangeInputValueAction(e.target.value);
            dispatch(action);
        },

        addIteam() {
            const action = getAddIteamAction();
            dispatch(action);
        },

        deleteIteam(index) {
            const action = getDeleteItemAction(index);
            dispatch(action);
        }
    }
};

// App是一个UI组件，connect将UI组件和业务逻辑连接起来返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(App);