import {reducer as heardReducer} from '../components/header/store';
import {combineReducers} from 'redux-immutable';

export default combineReducers({
    header:heardReducer
})