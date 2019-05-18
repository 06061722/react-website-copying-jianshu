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
    this.state = {
      isFocused: false,
      isMouseInTipsBoard: false,
      showedItemCount: 10,
      PageCount: 0,
      showedList: []
    }
    this.setInputFocused = this.setInputFocused.bind(this)
    this.blurInputFocused = this.blurInputFocused.bind(this)
    this.mouseEnterTipsBoard = this.mouseEnterTipsBoard.bind(this)
    this.mouseLeaveTipsBoard = this.mouseLeaveTipsBoard.bind(this)
    this.changeShowedList = this.changeShowedList.bind(this)
  }

  setInputFocused () {
    if (this.props.searchTipsItemList.size === 0) this.props.ajaxSearchTipsItemList()
    this.setState(state => ({
      ...state, isFocused: true
    }))
  }

  blurInputFocused () {
    this.setState(state => ({
      ...state, isFocused: false
    }))
  }

  mouseEnterTipsBoard () {
    this.setState(state => ({
      ...state, isMouseInTipsBoard: true
    }))
  }

  mouseLeaveTipsBoard () {
    this.setState(state => ({
      ...state, isMouseInTipsBoard: false
    }))
  }

  changeShowedList (spinIconDOM) {
    
    // rotate the icon of huanyibi using DOM
    let originAngle = spinIconDOM.style.transform.replace(/[^0-9]/ig, "")
    if (originAngle === '') originAngle = 0
    originAngle = parseInt(originAngle) + 360
    spinIconDOM.style.transform = `rotate(${originAngle}deg)`

    // change items in searchTipsBoard using state and props
    const unmutRawList = this.props.searchTipsItemList
    let { PageCount, showedItemCount } = this.state
    const totalPage = Math.ceil(unmutRawList.size / showedItemCount)
    let showedList = []
    let begin = PageCount % totalPage * showedItemCount
    let end = begin + showedItemCount
    for (let i = begin; i < end && i < unmutRawList.size; i++) {
      showedList.push(unmutRawList.get(i))
    }
    PageCount++
    this.setState(state => ({
      ...state, showedList, PageCount
    }))
  }

  render () {
    const { isFocused, isMouseInTipsBoard, showedList } = this.state
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
            <CSSTransition timeout={200} in={isFocused} classNames='slide'>
              <SearchInput
                className={isFocused ? 'focused' : ''}
                onFocus={this.setInputFocused}
                onBlur={this.blurInputFocused} />
            </CSSTransition>
            <span className={isFocused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</span>
            <SearchTipsBoard
              isFocused={isFocused}
              isMouseInBoard={isMouseInTipsBoard}
              list={showedList}
              mouseEnter={this.mouseEnterTipsBoard}
              mouseLeave={this.mouseLeaveTipsBoard}
              changeList={this.changeShowedList}
            />
          </SearchWrapper>
        </Nav>
        <Addition onMouseEnter={this.mouseEnterTipsBoard}>
          <Button className="write">
            <span className="iconfont">&#xe60c;</span>
            写文章
          </Button>
          <Button className="register">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

function SearchTipsBoard (props) {
  let spinIconDOM
  if (props.isFocused || props.isMouseInBoard) {
    return (
      <SearchTips onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave}>
        <SearchTipsTitle>
          热门搜索
            <SearchTipsSwitch onClick={() => props.changeList(spinIconDOM)}>
            <span className="iconfont spin" ref={DOM => spinIconDOM = DOM}>&#xe61e;</span>
            换一批
            </SearchTipsSwitch>
        </SearchTipsTitle>
        <div>
          {props.list.map(item => <SearchTipsItem key={item}>{item}</SearchTipsItem>)}
        </div>
      </SearchTips>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    searchTipsItemList: state.getIn(['header', 'searchTipsItemList']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ajaxSearchTipsItemList () {
      dispatch(actionCreators.ajaxSearchTipsItemList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)