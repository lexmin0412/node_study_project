// express应用

const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get("/", (req, res)=>{  // 监听get /路径
  // const { url, method } = req
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
})
app.get("/users", (req, res)=>{  // 监听get /路径
  res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')


    const data = JSON.stringify([{   // 序列化
      name: 'Tom',
      age: '20'
    }])
    
    res.end(data)        // end只接收两种类型 String或Buffer
})

// 监听
app.listen(3001)