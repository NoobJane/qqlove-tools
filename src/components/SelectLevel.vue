<template>
<div class="select-columns">
  <label>{{ label }}</label>
  <el-select v-model="sValue" size="mini" @change="change" :disabled="disabled" filterable>
    <el-option v-for="(option, index) in options" :key="index" :value="option.value" :label="option.label"></el-option>
  </el-select>
</div>
</template>

<script>
import _ from 'lodash'

export default {
  name: `SelectLevel`,
  props: {
    label: String,
    value: [Number, String],
    options: {
      type: Array,
      default: new Array()
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sValue: this.value
    }
  },
  watch: {
    value(val) {
      this.sValue = val
    }
  },
  // update parent's prop attribute.
  emits: ['update:value'],
  methods: {
    change(val) {
      this.$emit('update:value', val)
    }
  }
}
</script>

<style>
.select-columns {
  display: inline-flex;
  flex-direction: column;
  width: 64px;
  margin-right: 16px;
  margin-bottom: 8px;
}

.select-columns label {
  font-size: 14px;
  color: #303133;
}

.select-columns .el-input__inner {
  padding: 0px 5px;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #dcdfe6;
  color: #303133;
  width: 64px;
}

.select-columns .el-input__suffix {
  right: 0;
}
</style>
