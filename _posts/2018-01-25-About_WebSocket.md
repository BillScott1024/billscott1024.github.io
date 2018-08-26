---
layout: post
title: 什么是WebSocket？
date: 2018-08-27 
tags: 博客   
--- 
# 什么是WebSocket？ #
　
> 　WebSocket协议是一种基于ＴＣＰ的一种新的网络协议。他实现了浏览器与服务器全双工(full-duplex)通信----允许服务器主动发送信息给客户端。
>
>　　　　　　　　　　　　　　　　　　　　　　　----百度百科

## 实现原理 ##
　　在实现websocket连线过程中，需要通过浏览器发出websocket连线请求，然后服务器发出回应，这个过程通常称为“握手” 。在 WebSocket API，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。在此WebSocket 协议中，为我们实现即时服务带来了两大好处：
### 1. Header ###
　　互相沟通的Header是很小的-大概只有 2 Bytes。
### 2. Server Push ###
　　服务器的推送，服务器不再被动的接收到浏览器的请求之后才返回数据，而是在有新数据时就主动推送给浏览器。

WebSocket与消息推送 - 张果 - 博客园
https://www.cnblogs.com/best/archive/2016/09/12/5695570.html#_label2