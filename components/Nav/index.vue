<template>
  <!-- 斜杠模式 -->
  <section
    v-if="separationMode === 'Slash'"
    class="flex-sc cursor-pointer"
    :class="`${wrap}`"
  >
    <!-- 前缀内容 -->
    <slot name="prefix"></slot>
    <!-- 点击全部 -->
    <nav
      v-if="showAll"
      :class="`${isCurrentBtnTab(-1)} ${textSize} ${textColor}`"
      @click="changeTab(-1)"
    >
      <slot name="prefix_action_text">全部</slot>
    </nav>
    <nav
      :class="`${isCurrentTab(index)} ${textSize} ${textColor}`"
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
  </section>

  <!-- 按钮模式 -->
  <section
    v-if="separationMode === 'Space'"
    class="flex-sc cursor-pointer"
    :class="`${gapSize} ${wrap}`"
  >
    <!-- 前缀内容 -->
    <slot name="prefix"></slot>
    <!-- 点击全部 -->
    <nav
      v-if="showAll"
      :class="`${isCurrentBtnTab(-1)} ${btnSize} ${hideBorder} ${textColor}`"
      @click="changeTab(-1)"
    >
      <slot name="prefix_action_text">全部</slot>
    </nav>
    <!-- 列表 -->
    <nav
      :class="`${isCurrentBtnTab(index)} ${btnSize} ${hideBorder} ${textColor}`"
      class="flex-sc transition-colors"
      @click="changeTab(index)"
      v-for="(item, index) in navList"
      :key="item.label"
    >
      {{ item.label }}{{ item.count }}
    </nav>
  </section>
</template>

<script setup lang="ts">
import type { NavProps } from "./hook";
interface Props {
  /**下标 */
  modelValue?: number;
  /**导航栏列表 */
  navList: Array<NavProps>;
  /**分隔模式 默认为 Slash / 可填写 Slash 和 Space */
  separationMode: string;
  /**按钮尺寸: first,two,base */
  btnSize?: string;
  /**文字大小: large,first,two,base,tips */
  textSize?: string;
  /**字体颜色: gray1,gray2,gray3,gray4,gray5,gray6,gray7,gray8,gray9 */
  textColor?: string;
  /**间距: first,two,base */
  gapSize?: string;
  /**是否显示边框 */
  hideBorder?: boolean;
  /**是否显示全部 */
  showAll?: boolean;
  /**row情况下：是否换行 */
  wrap?: boolean;
}
// 双向绑定显隐
const emits = defineEmits<{
  (e: "update:modelValue", val: number): void;
  (e: "click", val: number, beforeTabIndex: number): void;
}>();

const props = defineProps<Props>();
const tabIndex = computed({
  get: () => props.modelValue,
  set: (val: number) => {
    emits("update:modelValue", val);
  },
});

// 文字模式下：是否选中
const isCurrentTab = (index: number | undefined) => (tabIndex.value === index ? "text-first hover:text-gray1" : "hover:text-gray2");

// 按钮模式下：是否选中状态
const isCurrentBtnTab = (index: number | undefined) =>
  tabIndex.value === index ? "text-first btn-active-color btn-active-hover-color" : "hover:text-gray2";

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

// 字体颜色
const textColor = computed(() => {
  switch (props.textColor) {
    case "gray1":
      return "text-gray1";
    case "gray2":
      return "text-gray2";
    case "gray3":
      return "text-gray3";
    case "gray4":
      return "text-gray4";
    case "gray5":
      return "text-gray5";
    case "gray6":
      return "text-gray6";
    case "gray7":
      return "text-gray7";
    case "gray8":
      return "text-gray8";
    case "gray9":
      return "text-gray9";
    default:
      return "text-gray2";
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

// 点击回调
const changeTab = (index: number) => {
  // 点击之前的上一个下标
  const beforeTabIndex = tabIndex.value;
  // 点击目标的下标
  tabIndex.value = index;
  emits("click", index, Number(beforeTabIndex));
};
</script>

<style scoped lang="scss"></style>
