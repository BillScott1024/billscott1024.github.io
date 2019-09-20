---
layout: post
title: 工作中最常用的Git命令及常见错误解决方案
date: 2019-09-10
tags: Git
music-id: 1373225817
--- 

# Git主要操作命令
#### 1. git clone   `克隆远程代码仓库`
#### 2. git pull / git pull --rebase `拉取远程代码库到本地`
#### 3. git rebase --continue `如果git pull后与本地修改有冲突，需要先解决冲突，并在Source Tree中将冲突标记为与解决，使用git rebase --continue合并冲突`
#### 4. git commit -m'xxx' `提交修改到本地`
#### 5. git push origin master/[branch] `推送本地修改到远端库`


-------
推荐一个学习Git命令的网站：[Learn Git Branching](https://learngitbranching.js.org/),这个是网站的首页：
![Learn Git Branching](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20190911194932.png)
    在这个网站的沙盒中可以使用各种Git命令去熟悉Git命令的作用和使用方法而不不担心损坏自己电脑中的文件。
    ![](https://es-blogimg.oss-cn-hangzhou.aliyuncs.com/img/20190911195434.png)
    并且可以通过动画的方式去理解Git中的各种合并，分支等操作。

-------
 

# Git 常用命令
* git status `查看当前本地库状态`
* git log `查看最近的commit记录`
* git branch `查看当前分支`



# Git 常见误操作及解决方式
**1. 多个分支一起开发的时候将A分支的改动错误的提交到B的场景：**

```
将该分支的本不应该提交的commit撤销
git reset HEAD^

按需选择想要回到哪个版本
回到HEAD
git reset --soft HEAD

回到HEAD的前一个版本
git reset --soft HEAD^

回到HEAD的前10个版本
git reset --soft HEAD~5 

利用id回到指定版本
git reset --soft a06ef2f

将撤销的代码暂存起来
git stash

切换到正确的分支
git checkout feat/xxx

重新应用缓存 
git stash pop

在正确的分支进行提交操作
git add . && git commit -m "update xxxx"
```


