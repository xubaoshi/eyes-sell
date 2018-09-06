// 首页
import base from './base'
import { patientApi } from '@/config'
import store from '@/store/utils'

export default class home extends base {
  static async info() {
    return Promise.all([this.bannerList(), this.collect()]).then(
      ([bannerList, collectInfo]) => {
        store.save('home', {
          bannerList,
          collectInfo
        })
        return true
      }
    )
  }
  static async bannerList(param) {
    const url = `${this.baseUrl}${patientApi.home.banner}`
    return this.get(url, param)
  }
  static async collect(param) {
    const url = `${this.baseUrl}${patientApi.home.collect}`
    return this.get(url, param)
  }
}
