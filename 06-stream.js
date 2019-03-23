// stream 用于node中流数据的交互接口  stream和buffer都是处理流程 但是stream更优雅 


const fs = require('fs')

const rs = fs.createReadStream('./conf.js')  // 创建读取流

const ws = fs.createWriteStream('conf2.js')   // 创建写入流， 生成一个新的js文件

rs.pipe(ws)  


// 二进制友好
const rs2 = fs.createReadStream('./images/01.png')  // 创建读取流

const ws2 = fs.createWriteStream('./images/02.png')   // 创建写入流, 生成一张图片

rs2.pipe(ws2)  