import {createStore} from "redux";
import reducer from "./reducer";

// store拿到reducer返回的新数据，替换掉store中的老数据
const store = createStore(reducer);

export default store;