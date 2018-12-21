<template>
 <div class="zx">
       <div class="title">标题
           <input type="text" placeholder="请填写标题">

       </div>
       <div class="editor">
              <!--editor的div为富文本的承载容器-->
　　　              <div id="editor"></div>
　　　              <button type="" @click="gettext">点击</button>
       </div>
        <b>投稿专区</b>
           <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  请选择分类<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                  <el-dropdown-item command="b">狮子头</el-dropdown-item>
                  <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                  <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
                  <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
           </el-dropdown>
    </div>
</template>

<script>
export default {
      data(){
         return{
             editor: null,
         }
     },
     mounted() {
　　　　　　// 实例化editor编辑器
　　　　　　this.editor = UE.getEditor('editor');
　　　　　　// console.log(this.editor.setContent("1223"))
       },
    methods: {
      　　  gettext() {
   　　　// 获取editor中的文本
            　　console.log(this.editor.getContent())
       　　 }
   　　 },
    destroyed() {
　　          // 将editor进行销毁
　          　this.editor.destroy();
      　}
}
</script>

<style>

</style>
