// 内建模块
const os = require('os')
const cpuStat = require('cpu-stat')

const mem = os.freemem() / os.totalmem * 100
console.log(`内存占用率：${mem}%`)

// 第三方模块
cpuStat.usagePercent((err, percent)=>{ // cpu使用占比
  console.log(`cpu占用率：${percent}`)
})  

function showStatistics () {
  cpuStat.usagePercent((err, percent)=>{ // cpu使用占比
    console.log(`cpu占用率：${percent}`)
  })
}

// 每隔一秒调用打印cpu使用率方法
// setInterval(() => {
//   showStatistics()
// }, 1000);

// 自定义模块
const conf = require('./conf')
console.log(conf)

const { rmbToDollar } = require('./currency')(7)  // 传入模块需要的参数
console.log(rmbToDollar(10))   // 传入功能函数需要的参数
