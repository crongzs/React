import React, {Component} from "react";
import {connect} from "react-redux"
import {HomeWrapper, HomeLeft, HomeRight} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import axios from "axios";


class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://miro.medium.com/max/3200/1*qXcjSfRj0C0ir2yMsYiRyw.jpeg"
                         alt="img"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.InitHomeData();
    }
}

const mapDispatchToProps = (dispatch) => ({
    InitHomeData() {
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
});

export default connect(null, mapDispatchToProps)(Home);