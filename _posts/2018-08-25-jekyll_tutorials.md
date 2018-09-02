---
layout: post
title: Jekyll搭建个人博客
date: 2017-09-05 
tags: 博客   
music-id: 1297750680
--- 


这篇文章主要讲的是如何使用和修改我的博客主题，文章内容含以下几点：

* 修改博客基础信息
* 发布文章
* 修改博客样式
* 添加文章字数统计和阅读时间估算
* 添加网易云音乐播放插件

博客模板根目录下的基本结构为

```
.
├── _config.yml 
├── _includes    
├── _layouts
├── _posts
├── _site
├── 404.html
├── about.md
├── archive.html
├── CNAME
├── css
├── feed.xml
├── Gemfile
├── Gemfile.lock
├── images
├── index.html
├── js
├── Rakefile
├── README.md
└── tags.html

```
1. _config.yml 是博客的配置文件，内容如图所示
    ![blogcreenshot](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180902002437.png)
<font color=#FF1493>title</font>：网站名称<br>
<font color=#FF1493>subtitle</font>：网站副标题<br>
<font color=#FF1493>desciption</font>：网站描述<br>
<font color=#FF1493>avatarTitle</font>：头像标题<br>
<font color=#FF1493>avatarDesc</font>：头像描述<br>
<font color=#FF1493>url</font>：网站链接<br>
<font color=#FF1493>comment</font>：评论系统，这里我是用的是国外的Disqus和livere，由于“众所周知”的原因，Disqus评论系统在国内并不可用，需要梯子才可以访问，虽然Disqus很好用==，所以我目前是使用的livere(来必力，韩国开发的)，相关配置和使用教程会在以后放出来。国内也有（大概？）好用的评论系统，例如：畅言、Valine等，可以自行测试使用。<br>
<font color=#FF1493>social</font>：社交账号<br>
<font color=#FF1493>baidu</font>：网站统计<br>
<font color=#FF1493>ga</font>：Google Analytics谷歌网站分析<br>
1. _includes/ 是网站模板包含的样式目录
2. _layout/ 是网站模板的样式模板目录
3. _post/ 是博客的文章目录，写好的markdown文件放在此目录，推送到github上，文章即可在博客上展示
4. _site/ 是网站的发布目录
5. 404.html 404页面
6. about.md 关于我 页面
7. archive.html 文章发布页面
8. CNAME cname域名转发，可以在Github上直接设置
9. css,feed.html RSS订阅页面
10. images 图片存储目录，可以存储文章引用的图片
11. index.html 主页入口
12. js/ js文件目录
13. README.md Github readme页面
14. tags.html 博客tags
### 添加文章字数统计和阅读时间
在_layouts目录下的post.html中，添加代码
```
<span >本文总字数:{{ page.content | strip_html | strip_newlines | remove: " " | size }}字 | </span>
<span >阅读完需要约{{ page.content | strip_html | strip_newlines | remove: " " | size | divided_by: 350 | plus: 1 }}分钟</span>
```
在文章的发布之后即可显示文章字数统计和阅读时间统计：
![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20180902150257.png)
### 添加网易云音乐播放插件
在_includes目录下，添加html文件 cloud-music.html
内容为：

```<!-- cloud music -->
<!-- auto=1 可以控制自动播放与否，当值为 1 即打开网页就自动播放，值为 0 时需要访客手动点击播放 -->
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86
        src="//music.163.com/outchain/player?type=2&id={{ page.music-id }}&auto=1&height=66">
</iframe>
```
在post.html，文章正文的开头，添加代码：
```<div align="center"> 
    <!-- 在正文开头添加网易云音乐插件 -->
  {% if page.music-id %}
    {% include cloud-music.html %}
  {% endif %} 
    </div>
```
在正文的markdown文本中，开头加上：
`music-id: 496869422
`
就可以在文章的开头显示网易云音乐播放器，music-id是音乐id，可以在网易云音乐播放器中查找
<br>
<br>
<br>
<br>
<br>
> 待更新