// 用户评价
import base from './base'
import { patientApi } from '@/config'
import store from '@/store/utils'
import lang from '@/utils/lang'
import Page from '@/utils/page'

export default class user extends base {
  // 用户信息
  static async info(param) {
    const url = `${this.baseUrl}${patientApi.user.info}`
    const userInfo = await this.get(url, param)
    store.save('user', userInfo)
  }

  // 推荐二维码
  static async qrcode(param) {
    const url = `${this.baseUrl}${patientApi.user.share.qrcode}`
    const qrcode = await this.get(url, param)
    store.save('shareQrcode', qrcode)
    return qrcode
  }

  // 收入明细
  static income(param) {
    const url = `${this.baseUrl}${patientApi.user.income}`
    return new Page(url, this.processData.bind(this))
  }

  // 发展用户
  static userList() {
    const url = `${this.baseUrl}${patientApi.user.myUser}`
    return new Page(url, this.processData.bind(this))
  }

  // 发展医生
  static doctorList() {
    const url = `${this.baseUrl}${patientApi.user.myDoctor}`
    return new Page(url, this.processData.bind(this))
  }

  // 发展用户收入
  static userIncomeList() {
    const url = `${this.baseUrl}${patientApi.user.myUserIncome}`
    return new Page(url, this.processData.bind(this))
  }

  // 发展医生收入
  static doctorIncomeList() {
    const url = `${this.baseUrl}${patientApi.user.myDoctorIncome}`
    return new Page(url)
  }

  // 处理数据
  static processData(item) {
    item['dateFormat'] = lang.dateFormat(item.date, 'yyyy-MM-dd')
  }
}
