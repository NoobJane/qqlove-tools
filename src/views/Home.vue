<template>
<div class="home">
  <div class="title-1">光与夜之恋工具箱</div>
  <div class="body-text">
    <p>本代码源码存放在 Github 地址: <a href="https://github.com/NoobJane/qqlove-tools">https://github.com/NoobJane/qqlove-tools</a></p>
    <p>本工具主要使用的框架 Vue3, 组件 Element-Plus 进行开发的。如果有意愿帮助工具改进，发现了 bug 或者有什么不错的想法，可以在社区一起讨论。</p>
    <p>后续打算开发灵犀伤害数值计算，但每张卡牌的成长数值是不一致的，因此之后可能需要搭建一个后端程序进行数据的采集，
      目前这一方面暂时还没有什么想法，如果有什么不错的建议，也欢迎在 github 中提出 issue 一起交流。</p>
  </div>

  <div class="title-1">主要功能</div>
  <div class="body-text">
    <p>网页端的菜单栏在页面上方，手机端的菜单栏在左上角。目前实现的功能有：</p>
    <ul>
      <li>信使巡游</li>
      <li>灵犀升级计算</li>
    </ul>
  </div>

  <div class="title-1">内容来源 & 特别感谢</div>
  <div class="body-text">
    <ul>
      <li><a href="https://weibo.com/u/7532385570">Gabbia 白鸦 (计算公式 & 升级材料数据)</a></li>
      <li><a href="https://weibo.com/u/7408959354">灵犀攻略组 (卡牌基本数值)</a></li>
    </ul>

  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data() {
    return {

    }
  },
  methods: {}
}
</script>

<style>
.home {
  /* font-family: "Hiragino Sans GB", sans-serif; */
  font-size: 16px;
}

.home ul{
  margin-block-start: 0;
  margin-inline-start: 0.5em;
  padding-inline-start: 30px;
}

.home p {
  padding: 0 0 15px 0;
}
</style>
