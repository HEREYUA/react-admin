import axios from 'axios'




// create an axios instance
const service = axios.create({
    baseURL: `http://127.0.0.1:8081`, // url = base url + request url http://192.168.9.128:8000
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 5000, // request timeout
    withCredentials: true // 允许携带cookie
  })
  
  // 请求拦截器
  service.interceptors.request.use(
    config => {
       
      
        return config;
    },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )
  
  // 响应拦截器
service.interceptors.response.use(function (response) {

      
      return response;
 
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
  
  export default service