import { ADD_ARTICLE } from '../constants/index';

export function addArticle(payload){
  return {type: ADD_ARTICLE, payload};
};

export function getData() {
  return {type: "DATA_REQUESTED"};
}
