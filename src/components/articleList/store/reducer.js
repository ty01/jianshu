import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState=fromJS({
    articleList:[]
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.getArticleList:
            return state.set("articleList",action.value);
        default :
            return state;
    }
}