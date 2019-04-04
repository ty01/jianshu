import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable';
import axios from 'axios';
import { message } from 'antd';

const getlunboData = () =>{
    return (dispath) => {
        axios.get('/api/lunboList.json').then((res)=>{
            const data= res.data
            if(data.success){
                const action ={
                    type:actionTypes.get_lunbo_data,
                    value: fromJS(data.data),
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

export {
    getlunboData,
}