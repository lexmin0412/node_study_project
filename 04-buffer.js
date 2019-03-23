// buffer: 八位字节组成的数组，可以有效地在js中存储二进制数据（表现形式为十六进制）

// Buffer是全局对象

// 创建
const buffer1 = Buffer.alloc(10);
console.log(buffer1)   // <Buffer 00 00 00 00 00 00 00 00 00 00>  默认值00

// Buffer.from  从数据创建buffer

// 从数组创建
const buffer2 = Buffer.from([1,2,10])
console.log('buffer2', buffer2)

// 从字符串创建
const buffer3 = Buffer.from('hello world1', 'utf8')  // buffer3 <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 31>
console.log('buffer3',buffer3)

// 写入
buffer1.write('hello, 中文')  // 字符串过长，无法全部赋值
console.log('buffer1', buffer1) 

// 读取
console.log(buffer1.toString())
// console.log(buffer1.toString('ascii'))  // ascii无法识别中文 所以会出现乱码

// 合并
const buffer4 = Buffer.concat([buffer1, buffer3])
console.log(buffer4.toString())