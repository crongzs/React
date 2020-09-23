# Redux

* 将组件中的数据放到一个公用的存储区域去存储，组件改变数据，其他的组件就会感知到数据改变

* ~~~bash
  Redux = Reducer + Flux
  ~~~

* Redux 是一个数据层框架，它把所有数据放在了store中

  ​	![image-20200813053538101](/Users/ku_rong/Library/Application Support/typora-user-images/image-20200813053538101.png)

![image-20200807000531476](/Users/ku_rong/Library/Application Support/typora-user-images/image-20200807000531476.png)

* 使用antD

  ~~~bash
  # 安装antd
  yarn add antd
  ~~~

  ~~~react
  import 'antd/dist/antd.css';
  import {Input, Button, List} from 'antd';
  ~~~

* store的创建

  ~~~shell
  yarn add redux
  ~~~

  src/store/index.js

  ~~~react
  import {createStore} from "redux";
  import reducer from "./reducer";d
  
  // store拿到reducer返回的新数据，替换掉store中的老数据
  const store = createStore(reducer);
  
  export default store;
  ~~~

  src/store/reduce.js

  ~~~bash
  const defaultState = {
      inputValue: '123',
      list: ['hello world', 'hello react']
  };
  
  // react中reducer需要返回一个函数
  // reducer可以接收state但是绝不能修改state
  export default (state = defaultState, action) => {
      // state: 这里的state指store里面，上一次存储的数据
      // action: 指当前所要做的操作(操作类型和新的操作值)
      if (action.type === 'change_input_value') {
          // 深拷贝一个state
          const newState = JSON.parse(JSON.stringify(state));
          newState.inputValue = action.value;
          return newState;
      }
  
      if (action.type === 'add_todo_item') {
          const newState = JSON.parse(JSON.stringify(state));
          newState.list.push(newState.inputValue);
          newState.inputValue = '';
          return newState;
      }
      return state;
  }
  ~~~

  src/App.js

  ~~~react
  import React, {Component} from 'react';
  import 'antd/dist/antd.css';
  import {Input, Button, List} from 'antd';
  import store from "./store";
  
  
  class App extends Component {
      constructor(props) {
          super(props);
          this.state = store.getState();
      }
  
      render() {
          return (
              <div style={{marginTop: '10px', marginLeft: '10px'}}>
                  <div>
                      <Input value={this.state.inputValue} placeholder="todo info" style={{width: '300px', marginRight: '10px'}}/>
                      <Button type="primary">Primary Button</Button>
                  </div>
                  <List
                      style={{marginTop:'10px', width:'438px'}}
                      bordered
                      dataSource={this.state.list}
                      renderItem={item => (
                          <List.Item>{item}</List.Item>
                      )}
                  />
              </div>
          )
      }
  }
  
  export default App;
  
  ~~~

  * redux的使用：创建store、创建reducer、将reducer传递给store、将store传递给组件


* ActionTypes的拆分：就是把action 的 type单独拎出来放到变量里面

store/actionType.js

~~~react
export const CHANGE_INPUT_VALUE = 'change_input_value';
export const SUBMIT_ITEM = 'submit_item';
export const DELETE_ITEM = 'delete_item';
~~~

App.jd

~~~react
    handleInputChange(e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        };
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = {
            type: SUBMIT_ITEM,
            // value: this.state.inputValue
        };
        store.dispatch(action);
    }

    handleItemClick(index) {
        const action = {
            type: DELETE_ITEM,
            // value: index
            index
        };
        store.dispatch(action);
    }
~~~

store/reducer.js

~~~react
import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM} from "./actionTypes"

const defaultState = {
    inputValue: 'Hello ...',
    list: ['Hello World', 'Hello React']
};

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === SUBMIT_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        // newState.list.push(action.value);
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        // newState.list.splice(action.value, 1);
        newState.list.splice(action.index, 1);
        // const list = [...newState.list];
        // list.splice(action.value, 1);
        // newState.list = list;
        return newState
    }
    return state;
}
~~~

* 使用actionCreator统一创建action：将action都集中写到一个文件当中

store/actionCreators.js

~~~react
import {CHANGE_INPUT_VALUE, SUBMIT_ITEM, DELETE_ITEM} from "./actionTypes"

export const getChangeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getSubmitItemAction = () => ({
    type: SUBMIT_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
});
~~~

App.js

~~~react
handleInputChange(e) {
        const action = getChangeInputValueAction(e.target.value);
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = getSubmitItemAction();
        store.dispatch(action);
    }

    handleItemClick(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
~~~

* sotre是唯一的：整个应用中只能有一个store存在
* 只有store能够改变自己的内容
* reducer必须是纯函数（纯函数：给定固定的输入就一定会有固定的输出，而且不会有任何副作用）

### redux的核心API

* createStore：帮助我梦创建一个sotre
* store.dispatch：派发action，将action传递给store
* store.getState：获取sotre里面的所有数据内容
* store.subscribe：订阅store的改变，只要sotre发生改变，store.subscribe接收的回调函数就会被执行

### UI组件和容器组件分离

* UI组件，负责叶脉能渲染的样式和数据

~~~react
import React, {Component} from "react";
import {Button, Input, List} from "antd";

class AppUI extends Component{
    render() {
        return (
            <div style={{marginLeft: '10px', marginTop: '10px'}}>
                <div>
                    <Input placeholder="todo info" style={{width: '300px', marginRight: '10px'}}
                           value={this.props.inputValue} onChange={this.props.handleInputChange}/>
                    <Button type="primary" onClick={this.props.handleBtnClick}>Submit</Button>
                </div>
                <List
                    bordered
                    style={{marginTop: '10px', width: '387px'}}
                    dataSource={this.props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={(index) => {this.props.handleItemClick(index)}}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default AppUI;
~~~

* 容器组件，负责业务逻辑

~~~react
import React, {Component} from "react";
import 'antd/dist/antd.css';
import store from "./store";
import {getChangeInputValueAction, getSubmitItemAction, getDeleteItemAction} from "./store/actionCreators"
import AppUI from "./AppUI"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        store.subscribe(this.handleStoreChange);

    }

    render() {
        return (
            <AppUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemClick={this.handleItemClick}
            />
        )
    }

    handleInputChange(e) {
        const action = getChangeInputValueAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getSubmitItemAction();
        store.dispatch(action);
    }

    handleItemClick(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default App;
~~~

* 无状态组件：当一个react组件只有reander函数时，我们就可以用一个无状态的组件来定义它
* 无状态组件就是一个函数

~~~react
import React from "react";
import {Button, Input, List} from "antd";

const AppUI = (props) => {
    return (
        <div style={{marginLeft: '10px', marginTop: '10px'}}>
            <div>
                <Input placeholder="todo info" style={{width: '300px', marginRight: '10px'}}
                       value={props.inputValue} onChange={props.handleInputChange}/>
                <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
            </div>
            <List
                bordered
                style={{marginTop: '10px', width: '387px'}}
                dataSource={props.list}
                renderItem={(item, index) => (
                    <List.Item onClick={(index) => {
                        props.handleItemClick(index)
                    }}>
                        {item}
                    </List.Item>
                )}
            />
        </div>
    )
};

export default AppUI;
~~~

* 无状态组件的性能高于普通的react组件，因为在普通的React组件中还要执行一些生命周期函数
* 什么时候用无状态组件：当我们使用一个UI组件时，它只负责页面渲染，不涉及操作逻辑
* 但是UI组件并不是完全只负责页面渲染，具体看业务状况决定是否在它里面做逻辑操作

### Redux中发送异步请求获取数据

* 使用axios

### react 中间件redux-thunk

~~~bash
yarn add redux-thunk
~~~

* redux-thunk可以使我们将复杂的逻辑请求或者异步请求放到action中去处理，避免代码臃肿
* 当使用了redux-thunk之后，action可以是一个函数了
* 当调用一个方法生成一个函数的action时，这个函数能够接收到store的dispatch方法

### 到底什么是redux中间件

![截屏2020-08-26 上午6.08.49](/Users/ku_rong/My/Study/React/慕课简书笔记/截屏2020-08-26 上午6.08.49.png)

* redux中间件指的是action和store之间。实际上就是对dispatch方法的一个封装升级。
* dispatch根据传递过来的action类型做不同的动作，如果action是一个对象，那么就直接传给store，如果是一个函数，就把这个函数执行结束。

### Redux-saga 中间件的使用

~~~bash
yarn add redux-saga
~~~

store.js

~~~react
import {createStore, applyMiddleware} from "redux";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoSaga);

export default store;
~~~

sagas.js

~~~react
import {takeEvery, put} from 'redux-saga/effects'
import {GETLIST} from "./actionType";
import {getInitListAction} from './actionCreators'
import axios from "axios";


function* getList() {
    const res = yield axios.get('http://127.0.0.1:8000/demo-1/');
    const action = getInitListAction(res.data);
    yield put(action);
}

function* todoSaga() {
    yield takeEvery(GETLIST, getList);
}

export default todoSaga;
~~~

## React-Redux的使用

~~~bash
yarn add react-redux
~~~

~~~react
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from "./store";

const AppTodoList = (
    <Provider store={store}>
    		// Provider 连接到了 store，App组件就有能力获取store里面的内容
        <App/>
    </Provider>
);

ReactDOM.render(
    AppTodoList,
    document.getElementById('root')
);

~~~

* `Provider` 是react-redux提供的第一个核心API，它的作用是连接`sotre`，使得它内部的组件都有能力去获取`sotre`里面的内容。
* `connect` 让组件和sotre做连接