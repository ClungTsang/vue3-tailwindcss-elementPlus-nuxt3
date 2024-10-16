<template>
  <el-skeleton
    animated
    :loading="loading"
    class="w-full"
    :class="className"
  >
    <template #template>
      <el-skeleton-item
        :variant="variant"
        :class="className"
        style="width: 100%; height: 100%"
      />
    </template>
    <slot></slot>
  </el-skeleton>
</template>

<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: true,
  },
  className: {
    type: String,
    default: "aspect-video",
  },
  variant: {
    type: String,
    default: "image",
  },
});
</script>
