import React, { Component } from 'react'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Addition,
  Button,
  SearchWrapper,
  SearchInput,
  SearchTips,
  SearchTipsTitle,
  SearchTipsSwitch,
  SearchTipsItem

} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.getSearchTips = this.getSearchTips.bind(this)
  }
  render () {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe626;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={this.props.isFocused} classNames='slide'>
              <SearchInput className={this.props.isFocused ? 'focused' : ''} onFocus={this.props.setInputFocused} onBlur={this.props.blurInputFocused} />
            </CSSTransition>
            <span className={this.props.isFocused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</span>
            {this.getSearchTips(this.props.isFocused, this.props.searchTipsItemList)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="write">
            <span className="iconfont">&#xe60c;</span>
            写文章
          </Button>
          <Button className="register">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  getSearchTips (isShow, list) {
    if (isShow) {
      return (
        <SearchTips>
          <SearchTipsTitle>
            热门搜索
              <SearchTipsSwitch>换一批</SearchTipsSwitch>
          </SearchTipsTitle>
          <div>
            {list.map(item => <SearchTipsItem key={item}>{item}</SearchTipsItem>)}
          </div>
        </SearchTips>
      )
    } else {
      return null
    }
  }

}

const mapStateToProps = (state) => {
  return {
    isFocused: state.getIn(['header', 'isFocused']),
    searchTipsItemList: state.getIn(['header', 'searchTipsItemList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInputFocused () {
      dispatch(actionCreators.getActionOfFocus())
      dispatch(actionCreators.getSearchTipsItemList())
    },
    blurInputFocused () {
      const action = actionCreators.getActionOfBlur()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)