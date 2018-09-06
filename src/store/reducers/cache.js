import { handleActions } from 'redux-actions'
import { SAVE } from '../types/cache'

export default handleActions(
  {
    [SAVE](state, action) {
      const { key, value } = action.payload
      return {
        ...state,
        [key]: value
      }
    }
  },
  {
    user: null, // 用户信息
    shareQrcode: null, // 用户
    home: null // 首页
  }
)
