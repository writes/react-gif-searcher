import { combineReducers } from 'redux';
import GifsReducer from './reducer_gifs';

const rootReducer = combineReducers({
  gifs: GifsReducer
});

export default rootReducer;
