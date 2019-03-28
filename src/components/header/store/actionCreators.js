import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable';
import axios from 'axios';
const searchFocus = () =>({
    type : actionTypes.search_focused
})

const searchBlur = () =>({
    type : actionTypes.search_blured
})
const getHotList = () =>{
    return (dispath) => {
        axios.get('/api/hotList.json').then((res)=>{
            const data= res.data
            if(data.success){
                const action ={
                    type:actionTypes.get_hostList,
                    value: fromJS(data.data)
                }
                dispath(action)
            }else{
            }
        }).catch((e)=>{
        })
    }
}


export {
    searchFocus, searchBlur , getHotList
}