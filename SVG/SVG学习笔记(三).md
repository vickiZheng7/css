# SVG学习笔记(三)
## 样式效果: 上色和描边

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


