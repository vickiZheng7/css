# SVG学习笔记(三)
## 样式效果

### 上色和描边

与CSS不同，SVG的样式设置属性主要通过fill和stroke属性来完成。当然，这些属性也可以直接设置在CSS中，利用style属性或选择器作用到元素上，不过SVG的\<style\>放在<defs>标签中(defs表示定义，除了样式，还能定义一些除非被defs外的元素使用否则不会在画布中出现的元素)。(CSS中的上色描边属性对SVG无效)。

```svg
<!--黑色边框粉色填充的圆形-->
<circle cx="100" cy="100" r="50" fill="pink" stroke="black"/>
```

`fill`：上色，形状内部颜色

`fill-opacity`: 填充色的不透明度

`stroke`：描边，边框的颜色

`stroke-opacity`：边框色的不透明度

`stroke-width`：边框宽度

`stroke-linecap`：边框终点的形状，可以用直线(butt)结束线段，可以用square结束线段，不过线段的宽度会超出实际范围，超出的大小由边框宽度决定，也可以用圆角(round)结束线段，同square一样，线段宽度会超出实际范围。

`stroke-linejoin`：折线连接处形状，miter是默认值，连接处显示尖角，round表示圆角，bevel表示连接处形成斜接。

`stroke-dasharray`：虚线描边，参数是一组都好分隔的数列，奇数表示填色区域的长度，偶数表示非填色区域的长度，这一组数列在边框上循环，显示虚线效果。

颜色命名方案与CSS一致，可以使用颜色名，颜色代码，也可使用rdb值等等。

### 渐变

#### 线性渐变

沿着直线改变颜色。在defs内部添加一个线性渐变节点linearGradient，通过`fill:url(linearGradientId)`引入作为填充色。

```svg
<svg width="300" height="300">
	<defs>
		<linearGradient id="linearStyle">
			<stop offset="0%" stop-color="black"></stop>
			<stop offset="100%" stop-color="pink"></stop>
		</linearGradient>
		<style>
			#myRect1 {
				fill: url(#linearStyle);
		</style>
	</defs>
	<rect width="180" height="180" x="80" y="80" id="myRect1"/>
</svg>
```
`offset`：颜色偏移量。

`stop-color`：偏移位置的颜色。

每个位置(offset)指定一个颜色(stop-color)，相邻位置之间颜色会产生线性渐变效果。

**=\> 可以用同样的方式处理边框(stroke)**

默认线性渐变的方向是水平方向，如果要改变方向，要通过两个点(x1, y1)(x2, y2)，两个点的坐标直接作为属性添加到linearGradient节点上。

如果你不想直接修改当前linearGradient节点的渐变方向，创建新的linearGradient节点，通过xlink:href引用当前linearGradient节点的渐变值

#### 径向渐变

从一个点开始发散渐变。类似线性渐变，在defs内部添加一个径向渐变节点radialGradient，通过`fill:url(radialGradientId)`引入作为填充色。

radialGradient节点内stop标签的属性与linearGradient属性作用相同。

同样的渐变区域中心的位置是可变的，可通过(cx, cy)两个属性改变渐变区域中心位置，还可通过r属性改变渐变区域半径。

除了渐变中心，还有渐变发散的焦点(fx, fy)。(cx, cy)和)(fx, fy)通过比例设置。如果焦点被移除渐变区域外面，则渐变不能准确呈现。

```svg
<svg width="600" height="300">
	<defs>
		<radialGradient id="radialStyle1">
			<stop offset="0%" stop-color="pink"></stop>
			<stop offset="100%" stop-color="black"></stop>
		</radialGradient>
		<radialGradient id="radialStyle2" cx="0.25" cy="0.25" r="0.25" xlink:href="#radialStyle1"/>
		<style>
			#myRect3 {fill: url(#radialStyle1);}
			#myRect4 {fill: url(#radialStyle2);}
		</style>
	</defs>
	<rect width="180" height="180" x="80" y="80" id="myRect3"/>
	<rect width="180" height="180" x="380" y="80" id="myRect4"/>
</svg>
```

#### spreadMethod(渐变过程)
spreadMethod有三个值：pad、reflect、repeat。pad就是我们平时看到的效果，repeat则会持续渐变，relect也会让渐变一致持续下去，不过效果跟渐变本身是相反的。
--------------------------------
# 渐变

SVG的渐变分两种，第一种是线性渐变，第二种是放射渐变，效果如下：

![线性、放射渐变]()

在defs元素中定义好渐变元素，然后填充到图形中。

### 基本渐变效果

渐变元素内部有几个stop元素，这些元素通过offset(偏移)指定stop-color(颜色中值)的特性位置，非特性位置的区间则根据相邻的颜色实现颜色渐变的效果。你还可以通过stop-opacity来设置当前位置颜色的透明度。

### 变换渐变效果

##### 线性渐变方向

基本线性渐变，颜色从左到右(横向)发生线性变化。如果你想改变线性渐变的方向，可以通过两个点[(x1, y1), (x2, y2)]来控制。两个点连成一条直线，直线的方向即为线性渐变的新方向。效果如下：

![线性渐变方向改变]()

##### 放射渐变

放射渐变效果由渐变中心和焦点控制。**怎么区分中心和焦点？**放射渐变效果存在于一个圆形区域内，这个区域的中心点就是渐变中心。这个区域内存在一个点(不一定是中心点)往外呈现放射效果，这个点即为焦点。
-----------------------


### 图案

# 图案

pattern，图案也是SVG中常用到的填充类型之一，定义在defs内部，你可以将图形和样式自由组合成一个图案。

#### 属性
width和height属性，用于表示图案基于外框的缩放比例。

x和y属性，用于表示图案绘制起始点的偏移位置。

patternUnits和patternContentUnits，用于描述图案的绘制情况，比较难理解，下面逐一讲解。

#### patternUnits

**默认值：objectBoundingBox。**

定义了pattern的坐标系统，预设为objectBoundingBox。

#### patternContentUnits

**与patternUnits正好相反，默认值：userSpaceOnUse。**

以整个SVG视区为坐标系统。


### 基本变换

### 裁剪和遮罩

