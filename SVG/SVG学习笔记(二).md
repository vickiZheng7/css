# SVG学习笔记(二)

## 路径

path的形状是通过属性d定义出来的，而d的值是一个“命令+参数”值的序列。

path能绘制出平滑曲线最佳效果。虽然折线(polyline)也可以绘制相似的效果，但是需要大量密集的离散点，并且在放大之后还是折线，无法做到平滑。相比之下，path则能用很少的点绘制出平滑流畅的线条，不过实现这些效果的前提是，要理解如何path是如何实现的。

#### 画笔位置
##### Move to(移动画笔)

`M x y`，移动画笔到(x, y)的位置，而不是划线，一般用于设定画笔开始的位置。

#### 直线命令

`M x y`: 当前画笔的位置(x, y)。

1. Line to(直线)

	`L x1 y1`，在(x, y)和(x1, y1)之间划一条直线。
	
	`l dx dy`，在(x, y)和(x + dx, y + dy)之间划一条直线。
	
2. Horizon(水平线)
	
	`H x1`，只带一个参数，在(x, y)和(x1, y)之间划一条水平线。
	
	`h dx`，只带一个参数，在(x, y)和(x + dx, y)之间划一条水平线。
	
3. Vertical(垂直线)

	`V y1`，只带一个参数，在(x, y)和(x, y1)之间划一条垂直线。
	
	`v dy`，只带一个参数，在(x, y)和(x, y + dy)之间划一条垂直线。
	
4. 闭合
	`Z`	，闭合路径.
	
#### 曲线命令

`M x y`: 当前画笔的位置(x, y)。

1. 二次贝塞尔曲线

	只有一个控制点。
	
	![二次贝塞尔曲线](https://developer.mozilla.org/@api/deki/files/326/=Quadratic_Bezier.png)
	
	`Q x1 y2, xn yn`，(x, y)是起点，(xn, yn)是终点，(x1, y1)是控制点，用来确定起点和终点曲线的斜率。
	
	![控制点对称的二次贝塞尔曲线](https://developer.mozilla.org/@api/deki/files/364/=Shortcut_Quadratic_Bezier.png)
	
	若另外一个二次贝塞尔曲线的控制点与当前贝塞尔曲线的控制点对成，则可使用快捷命令`T xn yn`，省略控制点坐标。

2. 三次贝塞尔曲线

	共有两个控制点。

	![三次贝塞尔曲线](https://developer.mozilla.org/@api/deki/files/159/=Cubic_Bezier_Curves.png)

	`C x1 y1, x2 y2, xn yn`，(x, y)是起点，(xn, yn)是终点，(x1, y1)和(x2, y2)是控制点，(x1, y1)是起点的控制点，(x2, y2)是终点的控制点。
	
	![控制点对称的三次贝塞尔曲线](https://developer.mozilla.org/@api/deki/files/363/=ShortCut_Cubic_Bezier.png)
	
	两个贝塞尔曲线连接起来，若两个贝塞尔曲线其中一个控制点相对称，那么其中一个贝塞尔曲线可以省略对称的控制点，简写成`S x2 y2, xn yn`。

3. 弧线

	弧线基本可以视为圆形或椭圆形的一部分，命令中部分参数跟椭圆形的参数相同.
	
	`A rx ry x-axis-rotation large-arc-flag sweep-flag x y`
	
	x-axis-rotation: x轴旋转角度。
	
	large-arc-flag: 角度大小，弧线大于还是小于180度，0是小角度弧，1是大角度弧。
	
	sweep-flag: 弧线方向，0表示从起点到终点沿逆时针画弧，1表示从起点到终点沿顺时针画弧。
	
	(x, y): 终点
	
	描绘一条弧线，指定弧线的起点和终点，根据弧线半径大小，弧线角度大小，弧线方向，绘制出弧线。
