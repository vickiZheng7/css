# 保持JS代码的可读性

我以为保持代码的可读性，最重要就是保证代码干净、简洁。

可读性差的代码，对于其他人来说是灾难，有时候对于自己也是折磨，甚至可能隐藏bug。

这里结合平时开发的经验，整理几条建议。

### 1. if/else语句，提前return
  * 过滤无效条件
  * 减少嵌套
  
  **提前return需要排除的无效条件**
  ```javascript
  function travelPlan(partner) {
	  if (partner) {
		  //好好计划一番
	  } else {
		  console.log("一个人旅游一点都不好玩！");
	  }
  }
  ```
  ```javascript
  function travelPlan(partner) {
    if (!partner) {
      console.log("一个人旅游一点都不好玩！");
      return;
	  };
    //好好计划一番
  }
  ```
 无效情况应该提前排除。除了减少嵌套，还能提前知道无效情况如何处理的，尤其是在if代码块很长的情况下。
  
  **提前return要求相对简单(代码量小)的代码块**
  ```javascript
  function travelPlan(partner) {
    if (!partner) {
      console.log("一个人旅游一点都不好玩！");
      return;
	  };
    if (partner.hasMoney()) {
      if (!partner.hasIdeas()) {
        //共同计划
      } else {
        console.log("飞机高铁partner决定");
      }
    } else {
      console.log("共享单车走天下");
    }
  }
  ```
  ```javascript
  function travelPlan(partner) {
    if (!partner) {
      console.log("一个人旅游一点都不好玩！");
      return;
	  };
    if (!partner.hasMoney()) {
      console.log("共享单车走天下");
      return;
    }
    if (partner.hasIdeas()) {
      console.log("飞机高铁partner决定");
      return;
    }
    //共同计划
  }
  ```
  将代码量较小的条件提前return，很明显能减少嵌套，并且判断条件清晰，逻辑顺畅，避免陷入嵌套旋涡里面。

### 2. 数组检查

* 减少代码行数，代码简洁

相比起：

```javascript
var isAllReady = true;
for (var index = 0, len = array.length; index < len; index++) {
  if (!array[index].isReady()) {
    isAllReady = false;
    break;
  }
}
console.log(isAllReady);
```

检查数组是否每一项都满足条件：
```javascript
//检查大家是否都准备好了，true表示全部都准备好了，false表示有人没有准备好
console.log(array.every(person => person.isReady()));
```

检查数组中是否有选项不满足条件：
```javascript
//检查是不是有人没准备好，true表示有人没准备好，false表示否准备好了
console.log(array.some(person => !person.isReady()));
```
利用Array的内置方法来检查数组是否满足一定的条件，让代码显得更简洁。

### 3. 默认函数参数值

* 减少判断和赋值处理
* 更直观简洁

检查a和b是否有赋值，如果没有赋值，则默认为0
 ```javascript
 function add(a, b) {
   a = a || 0;
   b = b || 0;
   return a + b;
 }
 ```
 **ES6支持给函数参数直接指定默认值**
 ```javascript
 function add(a = 0, b = 0) {
   return a + b;
 }
 ```
 避免手动赋默认值，清楚了解哪些参数是可省略的，这种写法更为直观。
 
### 4. 解构赋值
* 取值方便
* 简洁易读

通过临时变量取得属性值
```javascript
function countNum(fruitNum) {
  var apple = fruitNum["apple"] || 0;
  var pear = fruitNum["pear"] || 0;
  return apple + pear;
}
```
解构赋值
```javascript
function countNum({apple = 0, pear = 0}) {
  return apple + pear;
}
```

待续。
 


