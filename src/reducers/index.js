import { combineReducers } from 'redux'
import counter from './counter'
import tabNav from './tabNav'

export default combineReducers({
  counter, tabNav
})
