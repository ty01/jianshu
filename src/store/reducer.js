import {change_input_value,addList,deleteList} from './actionTypes'
const defaultState={
    inputValue:'',
    list:[]
}
//reducer 坚决不能修改原始的state 所以需要拷贝
export default (state=defaultState,action) => {
    if(action.type === change_input_value){
        const newS = JSON.parse(JSON.stringify(state));
        newS.inputValue=action.value;
        return newS
    }

    if(action.type === addList){
        const newS = JSON.parse(JSON.stringify(state));
        newS.list.push(newS.inputValue);
        newS.inputValue = '';
        return newS
    }
    if(action.type === deleteList){
        const newS = JSON.parse(JSON.stringify(state));
        newS.list.splice(action.index,1)
        return newS
    }

    return state;
}