<template>
<div>
  <el-header>
    <!-- drawer: 当屏幕宽度小于 992 时出现, 与 drawer 一起出现-->
    <span id="menu-icon" @click="showDrawer"><i class="el-icon-s-fold"></i></span>
    <span class="header-title">QQ Love Tools</span>
    <el-menu id="menu-horizontal" mode="horizontal" background-color="#2c3e50" text-color="#E4E7ED" active-text-color="#fff" router>
      <el-menu-item index="/">
        <i class="el-icon-house"></i>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="messenger">
        <i class="el-icon-price-tag"></i>
        <template #title>信使巡游</template>
      </el-menu-item>
      <el-menu-item index="levelUp">
        <i class="el-icon-pie-chart"></i>
        <template #title>灵犀升级计算</template>
      </el-menu-item>
    </el-menu>
  </el-header>

  <!-- main: view-router -->
  <el-main>
    <el-scrollbar>
      <div style="padding:10px 15px; max-width: 1280px; margin: 0 auto;">
        <router-view />
      </div>
    </el-scrollbar>
  </el-main>

  <!-- drawer: 当屏幕宽度小于 992 时出现 -->
  <el-drawer v-model="drawerVisible" direction="ltr" :before-close="closeDrawer" :show-close="false" size="200px">
    <template #title>
      光与夜之恋<br>工具箱
    </template>
    <el-menu text-color="#2c3e50" @select="closeDrawer" router>
      <el-menu-item index="/">
        <i class="el-icon-house"></i>
        <template #title>首页</template>
      </el-menu-item>
      <el-menu-item index="messenger">
        <i class="el-icon-price-tag"></i>
        <template #title>信使巡游</template>
      </el-menu-item>
      <el-menu-item index="levelUp">
        <i class="el-icon-pie-chart"></i>
        <template #title>灵犀升级计算</template>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</div>
</template>

<script>
export default {
  name: `App`,
  data() {
    return {
      drawerVisible: false,
      windowWidth: document.body.clientWidth
    };
  },
  methods: {
    showDrawer() {
      this.drawerVisible = true;
    },
    closeDrawer() {
      this.drawerVisible = false;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-header {
  position: relative;
  line-height: 60px;
  display: flex;
  background-color: #2c3e50;
  justify-content: left;
}

.el-header .header-title {
  margin-right: 30px;
  margin-left: 10px;
}

#menu-icon {
  display: none;
}

header#el-drawer__title.el-drawer__header {
  margin-bottom: 24px;
  color: #2c3e50;
  font-size: 18px;
  letter-spacing: 3px;
}

.el-header span {
  color: #f2f6fc;
  font-family: "Hiragino Sans GB", sans-serif;
  font-size: 28px;
  cursor: default;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

main.el-main {
  display: block;
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 60px;
  bottom: 0;
  padding: 0;
}

.title-1 {
  border-bottom: 1px solid #e4e7ed;
  line-height: 48px;
  font-size: 20px;
  color: #303133;
  margin-bottom: 10px;
}

.title-2 {
  border-bottom: 1px solid #909399;
  line-height: 32px;
  font-size: 16px;
  color: #303133;
}

.body-text {
  padding: 10px 0;
}

p {
  margin: 5px 0;
}

/* 响应式布局 */
@media screen and (max-width: 992px) {
  #menu-icon {
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
  }

  #menu-horizontal {
    display: none;
  }
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
