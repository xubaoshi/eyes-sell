import base from './base'
import wepy from 'wepy'
import store from '../store/utils'
import WxUtils from '../utils/wx'
import { patientApi } from '@/config'

/**
 * 权限服务类
 */
export default class auth extends base {
  /**
   * 一键登录
   */
  static async login() {
    const loginCode = this.getConfig('loginCode')
    if (loginCode != null && loginCode != '') {
      try {
        await this.checkLoginCode(loginCode)
      } catch (e) {
        console.warn('check login code fial', loginCode)
        await this.doLogin()
      }
    } else {
      console.warn('login code not exists', loginCode)
      await this.doLogin()
    }
  }

  /**
   * 获取用户信息
   */
  static async user(param = { block: false, redirect: false }, userInfo) {
    try {
      // 检查
      if (this.hasConfig('userInfo')) {
        store.save('userInfo', this.getConfig('userInfo'))
        return true
      }
      console.info('[auth] userInfo check fail')
      // 重新登录
      // await this.doLogin()
      // 获取用户信息
      const { userInfo } = await wepy.getUserInfo()
      // 解密信息
      // const { user } = await this.decodeUserInfo(rawUser)
      // 保存登录信息
      await this.setConfig('userInfo', userInfo)
      store.save('userInfo', userInfo)
      return true
    } catch (error) {
      console.error('[auth] 授权失败', error)
    }
  }

  /**
   * 服务端解密用户信息
   */
  static async decodeUserInfo(rawUser) {
    const url = `${this.baseUrl}${patientApi.auth.decodeUserInfo}`
    const param = {
      encryptedData: rawUser.encryptedData,
      iv: rawUser.iv,
      thirdSession: this.getConfig('thirdSession'),
      app_code: this.getShopCode()
    }
    return await this.get(url, param)
  }

  /**
   * 执行登录操作
   */
  static async doLogin() {
    const { code } = await wepy.login()
    const { thirdSession, loginCode } = await this.session(code)
    await this.setConfig('thirdSession', thirdSession)
    await this.setConfig('loginCode', loginCode)
    await this.login()
  }

  /**
   * 获取会话
   */
  static async session(jsCode) {
    const url = `${this.baseUrl}${patientApi.auth.session}?code=${jsCode}`
    return await this.get(url)
  }

  /**
   * 检查登录情况
   */
  static async checkLoginCode(loginCode) {
    const url = `${this.baseUrl}${
      patientApi.auth.checkSession
    }?loginCode=${loginCode}`
    const data = await this.get(url)
    return data.result
  }

  /**
   * 获取验证码
   */
  static async vcode(param) {
    const url = `${this.baseUrl}${patientApi.forget.vcode}`
    return await this.get(url, param)
  }

  /**
   * 更新密码
   */
  static async updatePassword(param) {
    const url = `${this.baseUrl}${patientApi.forget.updatePassword}`
    return await this.post(url, param)
  }

  /**
   * 设置权限值
   */
  static getConfig(key) {
    return wepy.$instance.globalData.auth[key]
  }

  /**
   * 检查是否存在权限制
   */
  static hasConfig(key) {
    const value = this.getConfig(key)
    return value != null && value != ''
  }

  /**
   * 读取权限值
   */
  static async setConfig(key, value) {
    await wepy.setStorage({ key: key, data: value })
    wepy.$instance.globalData.auth[key] = value
  }

  /**
   * 删除权限值
   */
  static async removeConfig(key) {
    console.info(`[auth] clear auth config [${key}]`)
    wepy.$instance.globalData.auth[key] = null
    await wepy.removeStorage({ key: key })
  }
}
