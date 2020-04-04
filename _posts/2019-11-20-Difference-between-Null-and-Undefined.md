---
layout: post
title: JavaScript深入浅出之理解Null和Undefined
date: 2019-11-19
tags: JavaScript
music-id: 829845
---

*  目录
{:toc}
-------

![Null&Undefined](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/bg2014032801.png)

-------

# 前言
在JavaScript有5个基本的简单数据类型：Number，String，Boolean，Null，Undefined 和一个复杂数据类型Object，其中**Null**和**Undefined**是最特殊的两个，在开发中经常会被搞混。

# 为什么在JavaScript中会需要Null和Undefined两个值来表示“无”
## 在JavaScript中，某些情况下null和undefined是相等的。
例如：

```
if (!undefined) 
    console.log('undefined is false');
// undefined is false

if (!null) 
    console.log('null is false');
// null is false

undefined == null
// true
```

## null和undefined的区别
### null表示“没有对象”，即该处不应该有值：

1. 作为函数的参数，表示该函数的参数不是对象。
2. 作为对象原型链的终点。


```
Object.getPrototypeOf(Object.prototype)
// null
```

### undefined表示“缺少值”，就是此处应该有一个值，但是还没有定义：
1. 变量被声明了，但还没有赋值，就等于undefined。
2. 调用函数的时候，本应提供的参数没有提供，该参数就为undefined。
3. 一个对象没有赋值的属性，该属性的值就位undefined。
4. 函数没有return返回值时，默认返回undefined。

例子： 


```js
var i; i   // undefined

function f(x){
    console.log(x)
}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```

## 如何判断一个变量是否为null或undefined
### undefined判断
如何判断一个变量是否为undefined，有两个方法：
1. 使用严格相等操作符 === 或 严格不相等操作符 ！== ，因为标准相等操作符 == 还会检查变量是否为null，为null的时候也会返回true。
2. 使用 typeof 操作符，对于未定义的变量只能使用这种方法判断，否则会**报错**。

**注意**
由于undefined未被JS设置为保留关键字，因此在代码中将变量名取为undefined是不会报错的，因此当undefined作为变量被重写了之后，用上面的判断方法就会失效（虽然正常情况下应该不会有开发者这样做。。。），例如：

```
var undefined = 1;
if(1 === undefined){    // true
    //do something
}
```

确保万无一失的方法是使用void操作符：
> The void operator evaluates the given expression and then returns undefined.
> 
> void 运算符 对给定的表达式进行求值，然后返回 undefined


```
var data;
console.log(data === void 0); //true
```

### null判断

当使用typeof null的时候，返回值会是一个“object”，从逻辑角度来看，null值表示一个空对象指针，它代表的其实就是一个**空对象**，所以使用typeof操作符检测时返回"object"也是可以理解的：

```
var data = null;
console.log(typeof data); // "object"
```

正确的判断方法是使用严格相等操作符 === ：

```javascript
if(data === null){  // true
       console.log("data中没有保存对象引用！");
   }
```

## null和undefined的不同用法

### null的用法

* 当声明一个即将保存对象的变量，但还没有赋值时，应当初始化为null；

* 当一个对象不再使用的时候，应该赋值为null，以“解除引用”，以便垃圾回收器，在下一个垃圾回收周期回收这个对象（并不会立即释放对象所占的内存）；

















> 引用转载来源
> [阮一峰-undefined与null的区别](https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)
> [JavaScript深入理解之undefined与null](https://juejin.im/post/5aa4f7cc518825557e780256)