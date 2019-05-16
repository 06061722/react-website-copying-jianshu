import { actionTypes } from './index'
import { fromJS } from 'immutable'
import axios from 'axios'

export const getActionOfFocus = () => ({
  type: actionTypes.SET_HEADER_INPUT_FOCUS
})

export const getActionOfBlur = () => ({
  type: actionTypes.BLUR_HEADER_INPUT_FOCUS
})

const searchTipsItemList = (payload) => ({
  type: actionTypes.GET_SEARCH_TIPS_ITEM_LIST,
  payload: fromJS(payload)
})

export const getSearchTipsItemList = () => {
  return (dispatch) => {
    axios.get('/api/searchTipsItemList.json').then(res => {
      const data = res.data
      dispatch(searchTipsItemList(data))
    })
  }
}