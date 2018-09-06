// 首页
import base from './base'
import { patientApi } from '@/config'
import store from '@/store/utils'

export default class home extends base {
  static async info() {
    return Promise.all([this.bannerList()]).then(
      ([bannerList]) => {
        store.save('home', {
          bannerList
        })
        return true
      }
    )
  }
  static async bannerList(param) {
    const url = `${this.baseUrl}${patientApi.banner.list}`
    return this.get(url, param)
  }
}
