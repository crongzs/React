import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import {GlobalStyle} from "./style";
import {IconfontGlobalStyle} from "./statics/iconfont/iconfont";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle/>
            <IconfontGlobalStyle/>
            <Header/>
            <BrowserRouter>
                {/*<Route path='/' exact render={() => <div>home</div>}/>*/}
                {/*<Route path='/detail' exact render={() => <div>detail</div>}/>*/}
                <Route path='/' exact component={Home}/>
                <Route path='/detail' exact component={Detail}/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;