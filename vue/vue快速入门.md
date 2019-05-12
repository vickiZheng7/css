



# Vue—快速入门

## 什么是vue？

vue是当下流行的前端JavaScript框架之一，它能帮助你快速构建用户界面，省去应用开发过程中频繁的DOM API调用(MVVM)。vue上手相对简单，不过前提是你已经掌握了HTML、CSS、JavaScript等前端基础知识，否则学习起来会比较吃力。

## vue环境搭建

### <script>引入

尝试Vue最简单的方法是脚本引入，Vue会被注册成一个全局变量。

```javascript
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### NPM

（新手学习时，建议先通过最简单的脚本引入方式进行学习，除非你熟悉基于Node.js的构建工具）

在用Vue构建大型应用时，推荐使用npm安装，和webpack等模块打包器配合使用。

```java
npm install vue
```

Vue还提供了官方的cli工具，能通过脚手架帮你快速搭建单页面应用项目，几分钟你就可以运行起一个开发生产可用的构建版本。

```javascript
//安装全局vue-cli
npm install -g @vue/cli
//命令行创建一个hello-world项目
vue create hello-world
//或者通过vue ui打开浏览器窗口，借助图形化界面创建和管理项目
vue ui

cd hello-world
//应用跑起来
npm run dev
```

vue-cli3还提供了快速原型开发服务，零配置为js或vue文件启动一个服务器。

```javascript
//安装全局扩展
npm install -g @vue/cli-service-global
//在app.vue所在的文件夹下启动命令
vue serve app.vue
```

## 第一个vue应用

接下来通过经典示例：todo list，边学习边实践。

1. 创建一个todolist应用。

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="uft-8"/>
       <title>TODO list</title>
     </head>
     <body>
       <div id="todoList">
         <!--todo-->
       </div>
     </body>
   </html>
   ```

   所有vue应用都是从vue函数开始的，用来创建todolist的vue实例。vue函数可传入一个选项对象，你可以通过这个对象来设计你想要的行为。

   ```javascript
   var vm = new Vue({/*todo*/})
   ```

2. 。

   

   首先确定vue实例的挂载DOM目标，id为todoLIst的div元素：`el:"#todoList"`。

   接着是todoList的模板，vue提供了三种提供模板的方式：

   1. template选项：字符串模板，模板将会替换掉挂载目标，`template: "<input value="" placeholder="please enter."/>"`
   2. render选项：是字符串模板的替代方案，通过函数方式返回vnode虚拟节点。
   3. 如果template选项和render选项均不存在，那么挂载目标内部的元素将被提取为模板使用。

   

   todo应用关联两个数据：输入框的todo值和确认的todo列表。

   ```javascript
   var vm = new Vue({
     el: "#todolist"
   })
   ```

   

3. 事件。

4. todo列表渲染。

5. 条件渲染。

v-bind

v-model

v-for

v-if

@click




