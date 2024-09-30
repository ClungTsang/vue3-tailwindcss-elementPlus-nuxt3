<template>
  <!-- 斜杠模式 -->
  <div
    v-if="separationMode === 'Slash'"
    class="flex-sc cursor-pointer"
    :class="`${wrap}`"
  >
    <slot name="prefix"></slot>
    <!-- 点击全部 -->
    <nav
      v-if="showAll"
      :class="`${isCurrentBtnTab(-1)}`"
      @click="changeTab(-1)"
    >
      全部
    </nav>
    <nav
      :class="`${isCurrentTab(index)} ${textSize}`"
      class="flex-sc transition-colors"
      @click="changeTab(index)"
      v-for="(item, index) in navList"
      :key="item.label"
    >
      {{ item.label }}{{ item.count }}
      <div
        v-if="navList.length !== index + 1"
        class="or"
      >
        /
      </div>
    </nav>
  </div>
  <!-- 按钮模式 -->
  <div
    v-if="separationMode === 'Space'"
    class="flex-sc cursor-pointer"
    :class="`${gapSize} ${wrap}`"
  >
    <slot name="prefix"></slot>
    <!-- 点击全部 -->
    <nav
      v-if="showAll"
      :class="`${isCurrentBtnTab(-1)} ${btnSize} ${hideBorder}`"
      @click="changeTab(-1)"
    >
      全部
    </nav>
    <!-- 列表 -->
    <nav
      :class="`${isCurrentBtnTab(index)} ${btnSize} ${hideBorder}`"
      class="flex-sc transition-colors"
      @click="changeTab(index)"
      v-for="(item, index) in navList"
      :key="item.label"
    >
      {{ item.label }}{{ item.count }}
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { NavProps } from "./hook";
interface Props {
  modelValue: number; // 下标
  navList: Array<NavProps>; // 导航栏列表
  separationMode: string; // 分隔模式 默认为 Slash / 可填写 Slash 和 Space
  btnSize: string; // 按钮尺寸: first,two,base
  textSize: string; // 文字大小: large,first,two,base,tips
  gapSize: string; // 间距: first,two,base
  hideBorder: boolean; // 是否显示边框
  showAll: boolean; // 是否显示前缀
  wrap: boolean; // row情况下：是否换行
}
const props = defineProps<Props>();
const tabIndex = computed({
  get: () => props.modelValue,
  set: (val) => {
    emits("update:modelValue", val);
  },
});

// 文字模式下：是否选中
const isCurrentTab = (index) => (tabIndex.value === index ? "text-first hover:text-gray1" : "hover:text-gray2 text-tips-color");

// 按钮模式下：是否选中状态
const isCurrentBtnTab = (index) =>
  tabIndex.value === index ? "text-first btn-active-color btn-active-hover-color" : "hover:text-gray2 text-tips-color";

// 按钮模式下：按钮大小
const btnSize = computed(() => {
  switch (props.btnSize) {
    case "first":
      return "btn-normal-first";
    case "two":
      return "btn-normal-two";
    default:
      return "btn-normal-base";
  }
});

// 文字模式下：文字大小
const textSize = computed(() => {
  switch (props.textSize) {
    case "large":
      return "text-large";
    case "first":
      return "text-first";
    case "two":
      return "text-two";
    case "base":
      return "text-base";
    case "tips":
      return "text-tips";
    default:
      return "text-two";
  }
});

// 间距大小
const gapSize = computed(() => {
  switch (props.gapSize) {
    case "first":
      return "gap-x-first gap-y-two";
    case "two":
      return "gap-x-two gap-y-base";
    default:
      return "gap-x-base gap-y-tips";
  }
});

// 是否隐藏边框
const hideBorder = computed(() => {
  return props.hideBorder ? "!border-none" : "";
});

// row情况下：是否换行
const wrap = computed(() => {
  return props.wrap ? "flex-wrap" : "";
});

// 双向绑定显隐
const emits = defineEmits<{
  (e: "update:modelValue", val: number): void;
  (e: "click", val: number): void;
}>();

// 点击回调
const changeTab = (index) => {
  tabIndex.value = index;
  emits("click", index);
};
</script>

<style scoped lang="scss"></style>
