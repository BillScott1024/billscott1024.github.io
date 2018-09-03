---
layout: post
title: 使用Google Closure Compiler进行Js代码压缩
date: 2018-09-03 
tags: JavaScript  
music-id: 470795480
--- 
### 使用Google Closure Compiler进行JS代码压缩
## 1.Google Closure Compiler是什么？
> The Closure Compiler is a tool for making JavaScript download and run faster. Instead of compiling from a source language to machine code, it compiles from JavaScript to better JavaScript. It parses your JavaScript, analyzes it, removes dead code and rewrites and minimizes what's left. It also checks syntax, variable references, and types, and warns about common JavaScript pitfalls.
> 
> Closure Compiler是一个使JavaScript下载和运行更快的工具。 它不是从源语言编译到机器代码，而是从JavaScript编译成更好的JavaScript。 它解析您的JavaScript，分析它，删除死代码并重写并最小化剩下的内容。 它还检查语法，变量引用和类型，并警告常见的JavaScript陷阱。 

## 2.使用环境
  平台：Mac OS
  环境：Java
## 3.检查是否安装了Java环境
打开终端，输入 `java -version`,输出java的版本说明已安装好了java，若报错，请安装java环境
<center>![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180903132733.png?x-oss-process=image/resize,w_500)</center>
## 4.Closure Compiler下载
在[Github](https://dl.google.com/closure-compiler/compiler-latest.zip)上下载最新版的编译好的Compiler文件，解压出jar文件存放在项目外的目录下：
<center>![compiler](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180903131934.png?x-oss-process=image/resize,w_300)</center>
## 5.在终端中，输入命令，运行jar：
```
java -jar /Users/wangjun/Git/compiler.jar --js_output_file=code.js '/Users/wangjun/Git/WorkProject/BallsRace/release/wxgame/code.js'
```
`/Users/wangjun/Git/compiler.jar` 改为自己的电脑上compiler.jar的路径，`code.js`改为输出文件名，`/Users/wangjun/Git/WorkProject/BallsRace/release/wxgame/code.js`改为输出路径。（其他参数这里使用默认）
运行后就可以看到生成了压缩的JS文件了。
压缩前后文件大小对比，压缩效果还是很明显的：
![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180903133758.png?x-oss-process=image/resize,w_300)![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180903133906.png?x-oss-process=image/resize,w_310)

## 6.使用sh脚本实现自动化打包压缩Js文件
由于我是使用Laya Box引擎做游戏开发的，每次打包都需要手动敲代码进行代码压缩，并且还需要手动删除打包后多余的库文件，流程实在很繁琐，所以我使用了Laya打包提供的后续执行命令功能，配合sh命令进行了打包压缩的自动化，大大提高了打包效率。
打开Laya Box的打包页面
<center>![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180903134500.png?x-oss-process=image/resize,w_400)</center>
编写sh命令：

```
cd /Users/wangjun/Git/WorkProject/BallsRace/release/wxgame/
rm -rf ./libs
rm -rf ./res
java -jar /Users/wangjun/Git/compiler.jar --js_output_file=code.js '/Users/wangjun/Git/WorkProject/BallsRace/release/wxgame/code.js'
```
保存为.sh文件
在后续执行脚本中填入.sh脚本的路径，在打包后就可以自动执行代码压缩，并且删除多余文件了。
## 7.帮助
在终端中输入 `java -jar compiler.jar --help` 可以查看compiler的命令帮助和其他参数
<center>![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180903134930.png?x-oss-process=image/resize,w_400)</center>
## 8.其他
我没用使用各种在线的Js代码压缩网站，原因如下：
1. 在线压缩工具受网络状况影响；
2. 和我的需求不一致，我需要的是压缩js文件，而不只是压缩js代码片段；
3. 无法实现自动化脚本，上传-等待-压缩-下载，比较繁琐；
4. 我觉得上传代码压缩并不安全，有泄漏源码的风险。

## 9.其他的JavaScript代码压缩工具
[UglifyJS](https://github.com/mishoo/UglifyJS)
[YUI Compressor](https://github.com/yui/yuicompressor)
[Smaller](http://25.io/smaller/)
[Minifier](https://github.com/GGG-KILLER/CSS-And-Js-Minifier)