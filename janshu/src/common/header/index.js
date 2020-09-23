import React, {Component} from "react";
import {connect} from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoList,
    SearchInfoIteam,
    SearchInfoSwitch,
    Addition,
    Button
} from "./style";
import {actionCreators} from './store';
import {CSSTransition} from 'react-transition-group';


class Header extends Component {

    getListArea() {
        const {focused, list, page, Pages, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;

        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchInfoIteam key={newList[i]}>{newList[i]}</SearchInfoIteam>)
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, Pages, this.spinIcon)}
                        ><span className="iconfont spin"
                               // ref 可以获取到react渲染出的真实的dom结点
                               ref={(icon) => {
                                   this.spinIcon = icon
                               }}
                        >&#xe851;</span>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const {focused, list, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe76a;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}>
                            </NavSearch>
                        </CSSTransition>
                        <span className={focused ? 'iconfont focused zoom' : 'iconfont zoom'}>&#xe7c4;</span>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='write'>
                        <span className="iconfont">&#xe708;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // focused: state.focused
        // focused: state.header.focused
        // 此时store中的数据已经通过immutable变成了一个不可更改的对象，需要使用get方法获取属性值
        // focused: state.header.get('focused')
        // 此时 state通过redux-immutable已经变成了一个immutable数据，需要使用get方法获取属性值
        // focused: state.get('header').get('focused')
        // state.getIn(['header', 'focused']) 等价于 state.getIn(['header', 'focused'])
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        Pages: state.getIn(['header', 'Pages']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // const action = actionCreators.getInputFocusAction();
            // dispatch(action);
            // if (list.size > 0) {
            //     dispatch(actionCreators.getListAction());
            // }
            // 这里避免重复去进行ajax请求
            console.log(list.size);
            (list.size === 0) && dispatch(actionCreators.getListAction());
            dispatch(actionCreators.getInputFocusAction());
        },

        handleInputBlur() {
            // const action = actionCreators.getInputBlurAction();
            // dispatch(action);
            dispatch(actionCreators.getInputBlurAction());
        },

        handleMouseEnter() {
            dispatch(actionCreators.getMouseEnterAction());
        },

        handleMouseLeave() {
            dispatch(actionCreators.getMouseLeaveAction());
        },

        handleChangePage(page, Pages, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }

            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < 3) {
                dispatch(actionCreators.getChangePageAction(page + 1));
            } else {
                dispatch(actionCreators.getChangePageAction(1));
            }
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);