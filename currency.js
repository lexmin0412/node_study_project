// 货币转换

let rate
function rmbToDollar (rmb) {
  return rmb/rate
}


module.exports = function(r) {  // 导出对象加属性
  rate = r
  return {
    rmbToDollar
  }
}