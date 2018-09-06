export const baseUrl = 'https://www.easy-mock.com/mock/5b90d074502cf07ad7be5fbb/sell'

// 患者接口
export const patientApi = {
  banner: {
    list: '/api/banner/list' // 首页 banner 列表
  },
  auth: {
    session: '/api/auth/session', // 登录操作获取 third_session 及 login_code
    checkSession: '/api/auth/check_session', // 校验 session 是否生效
    decodeUserinfo: '/api/auth/decode_userinfo' // wepy.getUserInfo() 返回值的解码
  },
  forget: {
    updatePassword: '/api/auth/updatePassword',  // 更新密码
    vcode: '/api/auth/vcode'  // 验证码
  },
  user: {
    info: '/api/user/info', // 个人信息 （个人信息tab页所需数据）
    income: '/api/user/income', // 个人信息 （个人信息tab页收入明细）
    update: '/api/user/update', // 个人信息 （修改）
    share: {
      qrcode: '/api/share/qrcode', // 个人信息 推荐给朋友二维码
      users: '/api/share/users' // 个人信息 推荐给朋友我发展的用户
    },
    cash: {
      request: '/api/cash/request', // 个人信息 提现请求
      myCards: '/api/cash/myCards', // 个人信息 获取我添加的银行卡
      allCards: '/api/cash/allCards', // 个人信息 全部的银行卡
      addCard: '/api/cash/addCard', // 个人信息 添加银行卡
      history: '/api/cash/history' // 个人信息 提现历史
    }
  }
}
