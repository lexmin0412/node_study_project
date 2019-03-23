const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res)=>{

  const { url, method } = req
  
  console.log('there is a require')
  if ( url === '/' && method === 'GET' ) {
    // 读取首页
    fs.readFile(path.resolve('./index.html'),(err, data)=>{  // 使用path解析，防止不同操作系统获取的文件路径不一样
      if (err) {
        res.statusCode = 500  // 服务器内部错误
        res.end('500 Internal Server Error')
        return 
      }
      
      res.statusCode = 200  // 请求成功
      res.setHeader('Content-Type', 'text/html')  // 告诉浏览器返回的内容格式是html文本，使用html的方式解析文件
      res.end(data)  // 返回
    })
  }
  // 接口编写
  else if ( url === '/users' && method === 'GET' ) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')


    const data = JSON.stringify([{   // 序列化
      name: 'Tom',
      age: '20'
    }])
    
    res.end(data)        // end只接收两种类型 String或Buffer
  }
  // 图片请求
  else if ( req.headers.accept.indexOf('image/*') !== -1 && method === 'GET' ) {

    console.log(url)
    
    fs.createReadStream(path.resolve('.'+url)).pipe(res)    // 加. 拿到的地址是 /01 加.表示当前目录下的01文件  如果不加.则访问的是整个服务器所在的根目录
  }
}).listen(3001)   // 挂起，相当于开启一个服务器

// 响应2次是因为图标也要请求一次