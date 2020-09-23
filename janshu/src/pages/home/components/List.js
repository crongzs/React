import React, {Component} from "react";
import {connect} from "react-redux";
import {ListItem, ItemInfo} from "../style";

class List extends Component {
    render() {
        const {list} = this.props;
        return (
            <div>
                {list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className="pic" src={item.get('imgUrl')}
                                     alt="img"/>
                                <ItemInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ItemInfo>
                            </ListItem>
                        )
                    }
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList'])
});

export default connect(mapStateToProps)(List);