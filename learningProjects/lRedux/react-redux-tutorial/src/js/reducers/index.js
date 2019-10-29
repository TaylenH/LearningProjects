import { ADD_ARTICLE } from '../constants/index';

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action){
  switch(action.type){
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
      break;
    case "DATA_LOADED":
      return Object.assign({}, state, {
        remoteArticles: state.remoteArticles.concat(action.payload)
      });
      break;
    default:
      return state;
      break;
  }
};

export default rootReducer;
