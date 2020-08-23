### ES6

* let、const

let和const是ES 6中新增的两个关键字，用来声明变量，let和const都是块级作用域。let声明的变量只在let命令所在的代码块内有效。const声明一个只读的常量，一旦声明，常量的值就不能改变。

~~~javascript
let b = 2;
const c = 3;
~~~

* 箭头函数

ES 6允许使用“箭头”（=>）定义函数。这种方式创建的函数不需要function关键字，并且还可以省略return关键字。同时，箭头函数内的this指向函数定义时所在的上下文对象，而不是函数执行时的上下文对象。

~~~javascript
var f = a => a + 1;
// 等价于
var f = function (a) {
  return a + 1;
}

function foo(){
  this.bar = 1;
  this.f = (a) => a + this.bar;
};
// 等价于
function foo() {
  this.bar = 1;
  this.f = (function (a) {
    return a + this.bar;
  }).bind(this)
}
~~~

如果箭头函数的参数多于1个或者不需要参数，就需要使用一个圆括号代表参数部分

~~~react
var f = () => 1;
var f = (a, b) => a + b;
~~~

如果函数体内包含的语句多于一条，就需要使用大括号将函数体括起来，使用return语句返回

~~~javascript
var f = (x, y) => {
  x++;
  y--;
  return x + y;
}
~~~

### 模版字符串

模板字符串是增强版的字符串，用反引号（`）标识字符串。除了可以当作普通字符串使用外，它还可以用来定义多行字符串，以及在字符串中嵌入变量，功能很强大。

~~~javascript
// 普通字符串
`Hello ES6`
// 多行字符串
`Hello 
    ES6`
// 字符串中嵌入变量
var name = 'ES6';
var es = `Hello ${name}`;
~~~

