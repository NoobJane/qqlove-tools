<template>
<div class="select-second-columns">
  <span style="margin-right: 10px;">{{ label }}</span>
  <div class="select-child">
    <div class="select-child-label">星级</div>
    <el-select size="mini" placeholder=" " v-model="starLevel" @change="changeStarLevel">
      <el-option v-for="s in starLevelArray" :key="`s_${s.value}`" :value="s.value" :label="s.label"></el-option>
    </el-select>
  </div>
  <div class="select-child">
    <div class="select-child-label">等级</div>
    <el-select size="mini" v-model="sLevel" @change="changeLevel" filterable>
      <el-option v-for="l in levelArray" :key="`l_${l.value}`" :value="l.value" :label="l.label"></el-option>
    </el-select>
  </div>
</div>
</template>

<script>
export default {
  name: 'SelectMingJiLevel',
  props: {
    label: String,
    starLevel: Number,
    level: Number,
    levelArray: {
      type: Array,
      default () {
        return new Array()
      }
    },
    starLevelArray: {
      type: Array,
      default () {
        return new Array()
      }
    }
  },
  data() {
    return {
      sLevel: this.level
    }
  },
  watch: {
    level(val) {
      this.sLevel = val
    }
  },
  emits: ['update:starLevel', 'update:level'],
  methods: {
    changeStarLevel(val) {
      this.$emit('update:starLevel', val)
    },
    changeLevel(val) {
      this.$emit('update:level', val)
    }
  }
}
</script>

<style>
.select-second-columns {
  display: flex;
  align-items: flex-start;
}

.select-second-columns span {
  font-size: 14px;
  color: #606266;
}

.select-second-columns .select-child {
  display: inline-flex;
  flex-direction: column;
  width: 64px;
  margin-right: 16px;
  margin-bottom: 8px;
}

.select-second-columns .select-child-label {
  font-size: 12px;
  color: #303133;
}

.select-second-columns .el-input__suffix {
  right: 0;
}

.select-second-columns .select-child .el-input__inner {
  padding: 0px 5px;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #dcdfe6;
  color: black;
  width: 64px;
}
</style>
