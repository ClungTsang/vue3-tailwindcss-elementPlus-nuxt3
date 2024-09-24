<template>
  <div>
    <!-- 顶部栏 -->
    <NuxtLayout name="header" />
    <!-- 中间内容 -->
    <div class="py-first">
      <slot />
    </div>
    <!-- 底部栏 -->
    <NuxtLayout name="footer" />
    <!-- 回到顶部 -->
    <ToTop></ToTop>
  </div>
</template>
<script lang="ts" scoped></script>
