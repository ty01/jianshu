import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState =fromJS({
    focused:false,
    hotListHover:false,
    hotList:[],
    page:1,
    totalPage:1,
});

export default (state = defaultState ,action) => {
    switch (action.type) {
        case actionTypes.search_focused:
            return state.set('focused',true)
        case actionTypes.search_blured:
            return state.set('focused',false)  
        case actionTypes.get_hostList:
            // return state.set('hotList',action.value)
            //        .set('totalPage',action.totalPage)
            //merge等同于上面的一个个改
            return state.merge({
                hotList:action.value,
                totalPage:action.totalPage
            })
        case actionTypes.hotListNext:
            return state.set('page',action.value)   
        case actionTypes.hotListOver:
            return state.set('hotListHover',true) 
        case actionTypes.hotListOut:
            return state.set('hotListHover',false)                   
        default:
            return state;
    }
    
}