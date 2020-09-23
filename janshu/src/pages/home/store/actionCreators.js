import axios from 'axios'
import {fromJS} from "immutable";


export const getInitHomeAction = () => {
	return (dispatch) => {
		axios.get("/api/home.json").then((res) => {
            console.log(res.data.data);
            const data = res.data.data;
            const action = {
                type: "init_home_data",
                topicList: data.topicList,
                articleList: data.articleList,
                recommendList: data.recommendList
            };
            dispatch(action);
        })
	}
}