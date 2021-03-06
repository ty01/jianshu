define({ "api": [
  {
    "type": "post",
    "url": "/user/hahah",
    "title": "用户登录",
    "name": "do",
    "group": "User",
    "parameter": {
      "fields": {
        "params": [
          {
            "group": "params",
            "type": "int",
            "optional": false,
            "field": "time",
            "description": "<p>时间戳(用于判断请求是否超时)</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>确认来访者身份</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>手机号或者邮箱</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "user_pwd",
            "description": "<p>MD5加密的用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"msg\": \"登录成功！\",\n    \"data\": {\n         'uid': 1, //用户ID\n         'user_phone': '13011111111', //用户手机号\n         'user_nickname': '小明', //用户昵称\n         'user_email': '123456789@163.com', //用户邮箱\n         'user_rtime': 1501414343 //用户注册时间\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/components/header/store/actionTypes.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "params": [
          {
            "group": "params",
            "type": "int",
            "optional": false,
            "field": "time",
            "description": "<p>时间戳(用于判断请求是否超时)</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>确认来访者身份</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>手机号或者邮箱</p>"
          },
          {
            "group": "params",
            "type": "String",
            "optional": false,
            "field": "user_pwd",
            "description": "<p>MD5加密的用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 200,\n    \"msg\": \"登录成功！\",\n    \"data\": {\n         'uid': 1, //用户ID\n         'user_phone': '13011111111', //用户手机号\n         'user_nickname': '小明', //用户昵称\n         'user_email': '123456789@163.com', //用户邮箱\n         'user_rtime': 1501414343 //用户注册时间\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/components/header/store/actionCreators.js",
    "groupTitle": "User"
  }
] });
