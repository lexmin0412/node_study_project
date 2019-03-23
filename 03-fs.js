// fs
const fs = require('fs')

// 读取一个文件 同步版本
const data = fs.readFileSync('./conf.js')  // readFileSync 同步 这行代码没有执行完，后续代码不会执行 ，阻塞操作，不建议这样写，所有api都有异步版本，建议所有api都使用异步版本
console.log('sync', data)

// 异步版本
fs.readFile('conf.js', (err, data)=>{
  console.log('async' ,data)
})

console.log('其他操作')

// promise
const { promisify } = require('util')  // node提供的方法包
const readFile = promisify(fs.readFile)  // 使用promisify包装后，返回一个具备promise特性的方法
readFile('./conf.js').then(data=>{
  console.log('promise', data)
})

// node v10.0 支持
// fs Promises API
// 使用时会出现警告：(node:4704) ExperimentalWarning: The fs.promises API is experimental
// 实验性的属性，尽量不要用于生产
const { promises } = require('fs')
promises.readFile('./conf.js').then(data=>{
  console.log('fs promises', data.toString())
})

// generator
// aysnc await



