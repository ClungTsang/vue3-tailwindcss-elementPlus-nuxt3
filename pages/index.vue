<template>
  <div class="text-center">
    <div v-html="result?.content"></div>
    <el-button
      type="primary"
      size="default"
      @click="changeTopic"
      >切换文章</el-button
    >
  </div>
</template>
<script setup lang="ts">
const { interaction } = useApi();
const result = ref();
const initTopic = async () => {
  const { data } = await interaction.getTopics("5433d5e4e737cbe96dcef312");
  result.value = data;
};
// 初始化数据
initTopic();

const changeTopic = async () => {
  const { data } = await interaction.getTopics("634fa473d3061fe5e4e88d35");
  result.value = data;
};
</script>
<style scoped lang="scss"></style>
