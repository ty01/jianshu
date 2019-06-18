/**
 * @api {post} /user/login 用户
 * @apiName login
 * @apiGroup User
 * @apiParam (params) {int} time 时间戳(用于判断请求是否超时)
 * @apiParam (params) {String} token 确认来访者身份
 * @apiParam (params) {String} user_name 手机号或者邮箱
 * @apiParam (params) {String} user_pwd MD5加密的用户密码
 * @apiSuccessExample Success-Response:
 *  {
 *      "code": 200,
 *      "msg": "登录成功！",
 *      "data": {
 *           'uid': 1, //用户ID
 *           'user_phone': '13011111111', //用户手机号
 *           'user_nickname': '小明', //用户昵称
 *           'user_email': '123456789@163.com', //用户邮箱
 *           'user_rtime': 1501414343 //用户注册时间
 *  }
 *
 */
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
    searchFocus, 
    searchBlur , 
    getHotList, 
    hotListNext,
    hotListOver, 
    hotListOut
}