import axios from 'axios'

import { Toast } from 'antd-mobile'
import { baseUrl } from './config'
class HttpRequest {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl
  }
  getDefaultConfig() {
    const config = {
      baseURL: this.baseUrl,
      method: 'post',
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
    return config
  }
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      const token = localStorage.getItem('isLogin')
      if (token) {
        config.headers.Authorization = 'Bearer ' + token.replace(/"/g, '')
      }
      return config
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      // console.log(`response`)
      // console.log(res)
      if (res.status >= 200 && res.status < 300) {
        if (res.data.errcode !== 0) {
          Toast.fail(res.data.errmsg)
        }
        return res.data
      }
      return res
    }, err => {
      console.dir(err)
      if (err.message.indexOf('timeout') > -1) {
        // 判断请求异常信息中是否含有超时timeout字符串
        Toast.fail('请求超时')
      }
      return err
    })
  }
  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getDefaultConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
const service = new HttpRequest(baseUrl)
export default service
