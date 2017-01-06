/**
 * Created by qingyun on 17/1/3.
 */
//直接创建buffer
//不用引入模块
var buff = new Buffer(12);
// console.log(buff);
//清洗:因为代码申请过来的缓冲区可能是已经被使用过得,所以要先清洗(给每个字节填充数据)
//填充255 从第0个填充到第4个
// buff.fill(255 , 0 , 4 );
// console.log(buff);

//用数组创建buffer
var buff2 = new Buffer([1 , 254 , 0xb3]);
// console.log(buff2);

//用字符串创建buffer
var buff3 = new Buffer("a");
// console.log(buff3);

var buff4 = new Buffer("饭");
console.log(buff4);
//一个汉字占三位字节
var buff5 = new Buffer([0xe9 , 0xa5 , 0xad]);
console.log(buff5.toString());

var buff6 = new Buffer("我是人");
console.log(buff6);

var buff7 = new Buffer([0xe6 , 0x88 , 0x91 ,0xe6]);
var buff8 = new Buffer([0x98 , 0xaf , 0xe4 , 0xba , 0xba]);

//转码 字符串转码
// node 推荐的字符串转码组件:string_decoder
var stringDecoder = require("string_decoder").StringDecoder;
var xxx = new stringDecoder();
console.log(xxx.write(buff7));
console.log(xxx.write(buff8));