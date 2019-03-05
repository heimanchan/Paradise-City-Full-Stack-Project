import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import filterReducer from './filter_reducer'
import serachReducer from './search_reducer';

export default combineReducers({
  modal: modalReducer,
  filters: filterReducer,
  search: serachReducer,
})