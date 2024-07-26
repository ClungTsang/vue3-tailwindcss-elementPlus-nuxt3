<template>
  <div class="text-center">
    <div v-html="result?.content"> </div>
    <el-button type="primary" size="default" @click="changeTopic">切换文章</el-button>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
const { interaction } = useApi()
const result = ref()
const initTopic = async () => {
  const { data } = await interaction.getTopics('6262718079f90d94a6a0d2f5')
  ElMessage.success('初始化数据成功')
  result.value = data
}
// 初始化数据
initTopic()

const changeTopic = async () => {
  const { data } = await interaction.getTopics('634fa473d3061fe5e4e88d35')
  ElMessage.success('获取数据成功')
  result.value = data
}
</script>
<style scoped lang="scss"></style>
