<template>
  <div class="text-center">
    <el-button type="primary" size="default" @click="test">测试</el-button>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
const test = () => {
  ElMessage.success('测试成功')
}
</script>
<style scoped lang="scss"></style>
