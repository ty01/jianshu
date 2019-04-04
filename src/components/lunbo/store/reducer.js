import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

const defaultState =fromJS({
    lunboList:[]
});

export default (state = defaultState ,action) => {
    switch (action.type) {
        case actionTypes.get_lunbo_data:
            return state.set('lunboList',action.value)                   
        default:
            return state;
    }
    
}