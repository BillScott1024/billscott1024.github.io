---
layout: post
title: 关于Laya的中Timer的使用方法
date: 2018-09-07
tags: LayaBox  
music-id: 533455199
--- 
#Laya中Timer的类
###1.官方文档
| Package | laya.utils |
| --- | --- |
| 类 | public class Timer |
| Inheritance | Timer → Object |

> Timer 是时钟管理类。它是一个单例，不要手动实例化此类，应该通过 Laya.timer 访问。

|Method| 作用 |
| --- | --- |
|Timer()| 创建 Timer 类的一个实例。 |
|callLater(caller:*, method:Function, args:Array = null):void| 延迟执行。 |
|clear(caller:*, method:Function):void| 清理定时器。 |
|clearAll(caller:*):void| 清理对象身上的所有定时器。|
|frameLoop(delay:int, caller:*, method:Function, args:Array = null, coverBefore:Boolean = true):void|定时重复执行(基于帧率)。||frameOnce(delay:int, caller:*, method:Function, args:Array = null, coverBefore:Boolean = true):void|定时执行一次(基于帧率)。|
|loop(delay:int, caller:*, method:Function, args:Array = null, coverBefore:Boolean = true, jumpFrame:Boolean = false):void|定时重复执行。||once(delay:int, caller:*, method:Function, args:Array = null, coverBefore:Boolean = true):void|定时执行一次。||runCallLater(caller:*, method:Function):void| 立即执行 callLater 。|| runTimer(caller:*, method:Function):void|立即提前执行定时器，执行之后从队列中删除||toString():String|返回统计信息。|

###2.使用
新建一个正方体，加上`timer.loop`使它旋转：
![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180907210029.gif)
```
//添加自定义模型
        var box = scene.addChild(new Laya.MeshSprite3D(new Laya.BoxMesh(1, 1, 1)));
        box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
        var material = new Laya.StandardMaterial();
        material.diffuseTexture = Laya.Texture2D.load("res/layabox.png");
        box.meshRender.material = material;

        let func = function () {
            box.transform.rotate(new Laya.Vector3(0, 0.01, 0));
        };
        Laya.timer.loop(1, this, func);
```
添加clearAll()方法，使用setTimeOut两秒后clear掉定时器:

```
setTimeout(function () {
    console.log('清理定时器');
    Laya.timer.clear(this, func);
}, 2000);
```

![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180907210514.gif)

###3.注意
在使用laya.timer.loop之前，一定要先clear掉之前的定时器，否则会出现不可预期的BUG