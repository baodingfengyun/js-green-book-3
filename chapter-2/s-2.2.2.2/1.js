// 使用数组解构赋值，声明变量x，y
var [x, y] = [1, 2];

// 使用对象解构赋值，声明变量height, width
let {clientHeight: height, clientWidth: width} = window.document.body;

// 在变量声明的赋值模板中使用剩余参数，可以声明数组变量 more
var [x, y, ...more] = [1, 2, 3, 4, 5];

// 在对象解构中使用剩余参数，可以声明对象变量 moreProps
let {x, y, ...moreProps} = {x: 100, y: 200, z: 300};
