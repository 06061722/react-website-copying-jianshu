import { actionTypes } from './index'
import { fromJS } from 'immutable'
import axios from 'axios'

const createActionOfSearchTipsItemList = (itemList) => ({
  type: actionTypes.GET_SEARCH_TIPS_ITEM_LIST,
  itemList: fromJS(itemList),
})

export const ajaxSearchTipsItemList = () => {
  return (dispatch) => {
    axios.get('/api/searchTipsItemList.json').then(res => {
      const data = res.data
      dispatch(createActionOfSearchTipsItemList(data))
    })
  }
}