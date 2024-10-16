<template>
  <el-dialog
    :show-close="false"
    :width="width"
    v-model="visible"
    append-to-body
    class="!p-0"
    :before-close="handleClose"
  >
    <template #title>
      <div class="p-4 flex-bc font-bold text-xl">
        <div class="flex-1">
          <slot name="title">
            {{ title || "弹框标题" }}
          </slot>
        </div>
        <!-- 关闭按钮 -->
        <div
          class="iconfont icon-a-Frame1524902122 ml-4 cursor-pointer"
          @click="handleClose"
        ></div>
      </div>
    </template>
    <template #default>
      <div class="horizon-divider"></div>
      <div class="p-4">
        <slot name="default">
          <!-- 空占位符 -->
          <EmptyImg></EmptyImg>
        </slot>
      </div>
    </template>
    <template #footer>
      <slot name="footer">
        <div class="horizon-divider"></div>
        <div class="flex justify-evenly items-center text-xl cursor-pointer leading-[60px]">
          <div
            @click="handleClose"
            class="w-full text-center"
          >
            取消
          </div>
          <div class="vertical-divider h-[60px] mx-0"></div>
          <div
            @click="handleConfirm"
            class="text-brand1 w-full text-center"
          >
            确定
          </div>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useThrottleFn } from "@vueuse/core";
interface Props {
  modelValue: boolean;
  title?: string;
  width?: string;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "update:modelValue", val: boolean): void;
  (e: "confirm", val: MouseEvent): void;
}>();

// 显隐控制
const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});

// 宽度控制，默认640px
const width = computed(() => props.width || "640px");

const handleClose = () => {
  visible.value = false;
};

const handleConfirm = useThrottleFn((val: MouseEvent) => {
  emit("confirm", val);
}, 2000);
</script>
<style lang="scss" scoped></style>
