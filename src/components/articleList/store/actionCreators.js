import * as actionTypes from './actionTypes.js';
import {fromJS} from 'immutable';
import axios from 'axios';


const getArticleList = ()=>{
    return (dispath)=>{
        axios.get('api/articleList.json').then((res)=>{
            const data=res.data
            if(data.success){
                const action = {
                    type:actionTypes.getArticleList,
                    value:fromJS(data.data)
                }
                dispath(action)
            }
        })
    }
}

export {
    getArticleList
}