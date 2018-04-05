import { FETCH_SEARCH, FETCH_TRENDING } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    // array of searches
    case FETCH_SEARCH:
      return action.payload.data.data;
    case FETCH_TRENDING:
      return action.payload.data.data;
    default:
      return state;
  }
}
