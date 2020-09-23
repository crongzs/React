// import {combineReducers} from "redux";
// redux-immutable 提供的 combineReducers ，他生成的内容就是一个immutable对象
import {combineReducers} from "redux-immutable";
// import headerReducer from '../common/header/store/reducer'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'

// export default combineReducers({
//     header: headerReducer
// })

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
});

export default reducer