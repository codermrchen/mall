import axios from 'axios'

export function request(config) {

  //2、使用promise异步操作
  // return new Promise((resolve,reject) => {
  //1创建一个axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  //第二部分axios拦截器
  //请求拦截的作用
  //2.1请求拦截
  axios.interceptors.request.use(config => {
    // console.log(config); //这里是拦截器，要想原封不动发送给main，需要return
    //1、比如config中的一些信息不符合服务器的要求

    //2、比如每次发送网络请求时，都希望在界面中显示一个请求，转圈

    //3、某些网络请求(比如登录（token)),必须携带一些特殊信息
    return config
  },err => {
    // console.log(err);
  })


  //2、响应拦截
  axios.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  return instance(config)
}
