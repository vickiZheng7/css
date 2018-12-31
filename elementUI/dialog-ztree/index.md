其实这个问题之前已经遇到过了，但是还是在这里踩坑了。趁此机会整理一下，避免再犯。

#### 问题描述
预期效果：弹出dialog对话框，对话框的内容是由ztree实现的树菜单。

实际效果：弹出dialog对话框，对话框内容空白，树菜单显示失败。

```vue
<template>
    <el-dialog title="树菜单" :visible.sync="dialogVisible">
        <div id="tree-menu" class="ztree"></div>
    </el-dialog>
</template>
<script>
export default {
    data() {
        return {
            dialogVisible: false
        }
    },
    mounted() {
        let setting = {view: {showIcon: false}};
        let zNodes = [
            {id: "1", name: "nodes1"},
            {id: "2", name: "nodes2"}
        ];
        $.fn.zTree.init($("#tree-menu"), setting, zNodes);
    }
}
</script>
```

#### 问题原因

使用elementUI 1.4版本的时候就遇到过这个问题了，当时一直以为是自己编码的错误，花了很多时间排查。后来控制台调试的时候发现，没有打开dialog之前是介个样子的：

![dialog打开之前](./1.PNG)

第一次打开dialog之后：

![dialog第一次打开之后](./2.PNG)

基本就能明白，dialog的内容是懒渲染模式。在`el-dialog__body`未渲染之前是无法获取到其中的DOM元素进行操作的。

在elementui最新版本的文档中也有提示出来了：

![dialog懒渲染](./3.PNG)

#### 问题解决

1. 根据文档提示“如果需要执行 DOM 操作，或通过 ref 获取相应组件，请在 open 事件回调中进行”。但其实在第一次打开dialog的open事件回调执行的时候，仍然无法执行DOM操作，因为这个时候dialog的内容还是未渲染上去。可使用`Vue.$nextTick`将DOM操作延迟到DOM更新之后执行。

2. 因为树菜单的逻辑较为复杂，可复用，所以直接提取成组件。在组件mounted的时候去获取DOM元素来做ztree的初始化操作，可避开dialog懒渲染带来的DOM元素操作问题。
