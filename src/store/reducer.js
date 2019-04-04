import {reducer as heardReducer} from '../components/header/store';
import {reducer as lunboReducer} from '../components/lunbo/store';
import {reducer as articleListReducer} from '../components/articleList/store';
import {combineReducers} from 'redux-immutable';

export default combineReducers({
    header:heardReducer,
    lunbo:lunboReducer,
    articleList:articleListReducer
})