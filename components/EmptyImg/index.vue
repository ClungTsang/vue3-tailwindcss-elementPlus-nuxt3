<template>
  <el-empty :class="className" :image-size="size">
    <template #image>
      <slot name="image"></slot>
    </template>
    <template #description>
      <div class="text-tips text-tips-color font-normal text-center text-nowrap">
        {{ description }}
      </div>
    </template>
  </el-empty>
</template>
<script lang="ts" setup>
defineProps({
  size: {
    type: Number,
    default: 150,
  },
  className: {
    type: String,
    default: "aspect-auto",
  },
  description: {
    type: String,
    default: "暂无数据",
  },
});
</script>
