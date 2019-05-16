import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  isFocused: false,
  searchTipsItemList: []
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SET_HEADER_INPUT_FOCUS) {
    return state.set('isFocused', true)
  }
  if (action.type === actionTypes.BLUR_HEADER_INPUT_FOCUS) {
    return state.set('isFocused', false)
  }
  if (action.type === actionTypes.GET_SEARCH_TIPS_ITEM_LIST) {
    return state.set('searchTipsItemList', action.payload)
  }
  return state
}