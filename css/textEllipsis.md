# 文本省略

前段时间经常遇到文本省略的需求，其实这个不是什么大的难题，但是实现效果总是不尽如人意。所以，趁此机会整理一下现有的实现方案，并且整理一下我的解决方法。

[直接在codePen上试一下](https://codepen.io/vickizheng7/pen/LMLmBW)

## 单行省略

```css
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```
所有主流浏览器都支持text-overflow，没有什么压力。

## 多行省略

多行省略就没那么简单了，CSS没有像支持单行省略那样提供多行省略的属性，可能得绕点路。

### 1.webkit浏览器
```css
#multiLine-webkit {
  overflow: hidden;
  text-overflow: ellipsis;
  /*弹性伸缩盒子模型*/
  display: -webkit-box;
  /*设置伸缩盒子的子元素的排列方式*/
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```
-webkit前缀表示该属性是webkit的私有属性，也就是说它并不是规范的CSS属性，不存在于CSS标准中。这种方法有很明显的局限性。

### 2.跨浏览器
```css
#multiLine-browsers {
  height: 3.9rem;
  line-height: 1.3rem;
  overflow: hidden;
  position: relative;
}
#multiLine-browsers::after {
  content: "...";
  width: 50px;
  text-align: right;
  padding-bottom: 2px;
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1) 80%);
}
```
固定文本的高度，使用伪元素添加省略号，背景色设置为白色，定位在右下角。为了避免文字只显示一半，给背景添加上渐变效果。

#### 问题
##### 1. IE hack
如果是IE6-8浏览器，注意：
1. IE8仅支持`:after`
2. IE6-7是完全不支持after伪元素的

如何解决：
1. 判断浏览器为IE6-8，使用js模拟after的效果
2. jquery的pseudo plugin插件，利用IE特有的CSS行为来模拟after的效果
##### 2. 文本未超过行数
这个省略号就完全多余了。
1. 借助CSS进行优化，修改两个css属性

`#multiLine-browsers{height: 3.9rem;}` => `#multiLine-browsers{max-height: 3.9rem;}`

`#multiLine-browsers::after{bottom: 0;}` => `#multiLine-browsers::after{top: 2.6rem;}`

当行数大于或等于规定行数时，显示省略号，否则隐藏省略号。

2. 使用js调整省略号出现的时机。
