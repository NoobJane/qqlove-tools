<template>
<div class="card-box">
  <el-card shadow="never" v-if="data && data.length > 0">
    <template #header>
      <div class="card-header">
        <span>{{title}}</span>
      </div>
    </template>
    <!-- 根据主属性填充颜色 -->
    <div class="item-list">
      <div :class="`item item-${item.main}`" v-for="item in data" :key="item.key">{{item.name}}</div>
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: `CardBox`,
  props: {
    title: String,
    data: {
      type: Array,
      default () {
        return null
      }
    },
    color: {
      type: String,
      default () {
        return null
      }
    }
  }
}
</script>

<style>
.card-box {
  margin: 10px;
}

.card-box .el-card__header {
  padding: 10px 15px;
  font-weight: bold;
  font-size: 16px;
}

.card-box .el-card__body {
  padding: 10px 15px;
}

.card-box .el-card__body .item-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  font-size: 14px;
}

.card-box .el-card__body .item {
  padding: 8px 10px;
  margin: 5px 5px;
  cursor: default;
  font-weight: bold;
  border-radius: 5px;
}

.card-box .el-card__body .item-default {
  border: solid 1px #DCDFE6;
}

/* 快乐 */
.card-box .el-card__body .item-happy {
  background-color: rgb(232, 145, 144);
  color: #fff;
}
/* 信任 */
.card-box .el-card__body .item-trust {
  background-color: rgb(138, 190, 211);
  color: #fff;
}
/* 真挚 */
.card-box .el-card__body .item-sincere {
  background-color: rgb(168, 168, 168);
  color: #fff;
}
/* 专注 */
.card-box .el-card__body .item-focus {
  background-color: rgb(152,197,172);
  color: #fff;
} 

/* 无畏 */
.card-box .el-card__body .item-fearless {
  background-color: rgb(189, 178, 216);
  color: #fff;
}

/* 果决 */
.card-box .el-card__body .item-resolute {
  background-color: rgb(227, 182, 127);
  color: #fff;
}

.card-box .el-card__body .el-button {
  padding: 5px 10px;
  border-radius: 1px;
}
</style>
