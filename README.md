# nodejs

### 定义
> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

### 运行文件
node [filename]

### nodemon
> 自动监听文件改变
```javascript
npm install nodemon   // 安装nodemon
rs  // 重启nodemon命令
```

### vscode调试（待重现）

### 模块
```js
npm i cpu-stat -S  // 安装cpu使用率第三方模块
```

### 导出方式区别 需要充分了解ES6与CMD的完整导入导出规范
> ES6模块导入导出处于试验阶段
```js
// exports.functionName = function(){} 与 module.exports = function(){} 的区别：
// exports.functionName在引入的时候需要解构
const { rmbToDollar } = require('./currency')
```

### fs模块(内建的文件读写模块)
- 使用async和generator定义文件读写方法
async await比promise可读性更强

### buffer api