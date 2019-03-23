const http = require('http')
const url = require('url')

// 实现一个路由器
let router = []

class Application {
  get(path, handler) {
    // console.log(path, handler)
    router.push({
      path,
      method: 'get',
      handler
    })
  }
  listen(){
    // 创建一个server
    http.createServer((req, res)=>{
      let { pathname } = url.parse(req.url, true)  // 解析地址

      for ( const route of router ) {
        if ( route.path == pathname ) {
          route.handler(req, res)
          return 
        }
      }
      
    }).listen(...arguments)   // 传入的参数 传入端口
  }
}

module.exports = function(config){
  return new Application()
}