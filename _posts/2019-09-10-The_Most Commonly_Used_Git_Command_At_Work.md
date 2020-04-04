---
layout: post
title: 工作中最常用的Git命令及常见错误解决方案
date: 2019-09-10
tags: Git
music-id: 1373225817
--- 

*  目录
{:toc}


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
** 1. 多个分支一起开发的时候将A分支的改动错误的提交到B的场景：**

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



## Git只提交部分修改的文件（提交指定文件）
在我们的项目中，经常会在本地编译一些代码，还未写完，测试那边来告诉你要改改某个文件的bug，非常着急，此时改完了，提交的时候，自己还在编译的代码并不想提交，此时，你可以利用git这些指令帮助你！

1/ git status -s 查看仓库状态

2/ git add src/components/文件名 添加需要提交的文件名（加路径--参考git status 打印出来的文件路径）

3/ git stash -u -k 忽略其他文件，把现修改的隐藏起来，这样提交的时候就不会提交未被add的文件

4/ git commit -m "哪里做了修改可写入..."

5/ git pull 拉取合并

6/ git push 推送到远程仓库

7/ git stash pop 恢复之前忽略的文件（非常重要的一步）


## Git 清除本地未跟踪的文件和目录
有时候我们在打包之后引擎会自动生成一些多余的文件，这些文件不需要提交到远程库中，虽然可以通过 .gitignore添加忽略列表，但是，有时候这样做并不方便。可以使用命令 git clean:


git clean 命令支持以下参数：

```python
git clean [-d] [-f] [- ] [-n] [-q] [-e ] [-x | -X] [--] ...


```
其中几个主要参数用法如下：

```python
-d   # 删除未跟踪目录以及目录下的文件，如果目录下包含其他git仓库文件，并不会删除（-dff可以删除）。
-f   # 如果 git cofig 下的 clean.requireForce 为true，那么clean操作需要-f(--force)来强制执行。
-    # 进入交互模式
-n   # 查看将要被删除的文件，并不实际删除文件


```
通过以上几根参数组合，基本上可以满足删除未跟踪文件的需求了。例如在删除前先查看有哪些文件将被删除运行：

```python
git clean -n


```
想删除当前工作目录下的未跟踪文件，但不删除文件夹运行（如果 clean.requireForce 为 false 可以不加 -f 选项）：

```python
git clean -f


```
想删除当前工作目录下的未跟踪文件以及文件夹运行：

```python
git clean -df
```