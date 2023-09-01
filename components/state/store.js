import { createStore, combineReducers } from 'redux';
import { imgReducer } from './reducers';

const rootReducer = combineReducers({
  img: imgReducer,
});

const store = createStore(rootReducer);

export default store;