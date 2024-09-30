<template>
  <el-dialog
    destroy-on-close
    :append-to-body="true"
    :lock-scroll="true"
    :title="title"
    :width="width"
    v-model="visible"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #footer>
      <slot
        name="footer"
        v-if="showFooter"
      >
        <div class="flex-ac">
          <el-button @click="close">取 消</el-button>
          <div class="vertical-divider"></div>
          <el-button @click="confirm">确 认</el-button>
        </div>
      </slot>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Props {
  modelValue: boolean; // 显示隐藏
  title?: string; // 标题
  width?: string; // 宽度
  showFooter?: boolean; // 显示底部
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", val: boolean): void;
}>();

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<style scoped lang="scss"></style>
