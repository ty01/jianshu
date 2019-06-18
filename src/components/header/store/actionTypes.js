/**
 * @api {post} /user/hahah 用户登录
 * @apiName do
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
const search_focused = 'search_focused';
const search_blured = 'search_blured';
const get_hostList = 'get_hostList';
const hotListNext = 'hotListNext';
const hotListOver = 'hotListOver';
const hotListOut = 'hotListOut';
export {
    search_focused,
    search_blured,
    get_hostList,
    hotListNext,
    hotListOver,
    hotListOut
}