<template>
  <div class="text-center">
    <div v-html="result?.content"> </div>
    <el-button type="primary" size="default" @click="test">获取数据</el-button>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import interaction from '~/api/interaction';
const result = ref()
const test = async () => {
  const { data } = await interaction.getTopics('5433d5e4e737cbe96dcef312')
  ElMessage.success('获取数据成功')
  result.value = data
}
test()
</script>
<style scoped lang="scss"></style>
