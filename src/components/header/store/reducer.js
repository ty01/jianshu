import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState =fromJS({
    focused:false,
    hotList:[]
});

export default (state = defaultState ,action) => {
    switch (action.type) {
        case actionTypes.search_focused:
            return state.set('focused',true)
        case actionTypes.search_blured:
            return state.set('focused',false)  
        case actionTypes.get_hostList:
            return state.set('hotList',action.value)
        default:
            return state;
    }
    
}