<template>
  <el-backtop :right="40" :bottom="40" class="back">
    <SvgIcon class="iconfont" name="icon-sticky_24" :class="useSvgClass()" :size="24" />
  </el-backtop>
</template>
<style lang="scss" scoped>
.back {
  width: 47px;
  height: 47px;
  line-height: 47px;
  border-radius: 50%;
  border: 0.5px solid #000000b3;
  text-align: center;
  position: fixed;
  box-shadow: none;
  color: #fff;
  background-color: #000000b3;
  &:hover {
    background-color: #000000cc;
  }
}
</style>
