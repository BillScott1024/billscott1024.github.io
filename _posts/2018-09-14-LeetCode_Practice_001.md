---
layout: post
title: LeetCode_001 两数之和
date: 2018-09-11
tags: LeetCode  
music-id: 443292374
--- 
# 1. 两数之和
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

**示例：**

```
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

测试用例：

> 输入：[2,7,11,15] ，9
> 输出：[0，1]

JavaScript：

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let array = [];
   for(let   = 0 ; < nums.length; ++){
       for(let j = 0;j<nums.length;j++){
           if(  != j){
               if(nums[ ]+nums[j] == target){
                   array.push( );
                   array.push(j);
                   return array;
               }
           }
       }
   } 
};

```



> 记录一下LeetCode刷题练习

    