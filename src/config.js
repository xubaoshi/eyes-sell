export const baseUrl =
  'https://www.easy-mock.com/mock/5b90d074502cf07ad7be5fbb/sell'

// 患者接口
export const patientApi = {
  home: {
    collect: '/api/home/collect', // 首页 信息集合
    banner: '/api/banner/list' // 首页 banner 列表
  },
  auth: {
    session: '/api/auth/session', // 登录操作获取 thirdSession 及 loginCode
    checkSession: '/api/auth/check_session', // 校验 session 是否生效
    decodeUserinfo: '/api/auth/decode_userinfo' // wepy.getUserInfo() 返回值的解码
  },
  forget: {
    updatePassword: '/api/auth/updatePassword', // 更新密码
    vcode: '/api/auth/vcode' // 验证码
  },
  user: {
    info: '/api/user/info', // 个人信息 （个人信息tab页所需数据）
    income: '/api/user/income', // 个人信息 （个人信息tab页收入明细）
    update: '/api/user/update', // 个人信息 （修改）
    myUser: '/api/user/myUser', // 发展用户
    myDoctor: '/api/user/myDoctor', // 发展医生
    myUserIncome: '/api/user/myUser/income', // 发展用户收入
    myDoctorIncome: '/api/user/myDoctor/income', // 发展医生收入
    share: {
      qrcode: '/api/share/qrcode', // 个人信息 推荐给朋友二维码
      users: '/api/share/users' // 个人信息 推荐给朋友我发展的用户
    }
  }
}
