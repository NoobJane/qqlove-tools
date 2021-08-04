<template>
<div class="input-column">
  <label>{{ label }}</label>
  <el-input size="mini" v-model="value" :type="inputType" @input="change" :min="min" :max="max" :readonly="disabled"></el-input>
</div>
</template>

<script>
export default {
  name: `InputLevel`,
  props: {
    label: String,
    value: [Number,String],
    min:{
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: null
    },
    inputType: {
      type: String,
      default: `text`
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:value'],
  methods: {
    change(val) {
      if(this.inputType == 'number') {
        this.$emit('update:value', parseInt(val))
      } else {
        this.$emit('update:value', val)
      }
    }
  }
}
</script>

<style>
.input-column {
  display: inline-flex;
  flex-direction: column;
  width: 56px;
  margin-right: 24px;
  margin-bottom: 8px;
}

.input-column label {
  font-size: 14px;
}

.input-column .el-input__inner {
  padding: 0px 5px;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #dcdfe6;
  color: #303133;
  width: 56px;
  cursor: default;
}

</style>
