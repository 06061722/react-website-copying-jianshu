import { actionTypes } from './index'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  searchTipsItemList: [],
  })

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_TIPS_ITEM_LIST:
      return state.set('searchTipsItemList', action.itemList)
    default:
      return state
  }
}