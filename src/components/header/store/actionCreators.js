import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable';
import axios from 'axios';
import { message } from 'antd';
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
                    value: fromJS(data.data),
                    totalPage:Math.ceil(data.data.length/10)
                }
                dispath(action)
            }else{
                message.error('网络错误，请稍后重试');
            }
        }).catch((e)=>{
            message.error('网络错误，请稍后重试');
        })
    }
}

const hotListNext=(page)=>({
    type:actionTypes.hotListNext,
    value:page
})

const hotListOver=()=>({
    type:actionTypes.hotListOver,
})

const hotListOut=()=>({
    type:actionTypes.hotListOut,
})


export {
    searchFocus, searchBlur , getHotList, hotListNext ,hotListOver , hotListOut
}