var str = 'abcde';
var obj = new String(str);

// 定义一个新的 toString 函数
function newToString() {
  return 'hello, world!';
}
// 设置给新的对象属性 toString
function func(val) {
  val.toString = newToString;
}

// 示例1：传入值
func(str);
console.log(str); // 'abcde'

// 示例2：传入引用
func(obj);
console.log(String(obj)); //  'hello, world!'
