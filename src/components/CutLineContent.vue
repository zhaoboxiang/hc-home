<template>
  <div class="cut-line">
    <div class="content cut-line-content"></div>
  </div>
</template>

<script>
export default {
  name: "CutLineContent"
};
</script>

<style scoped lang="less">
.cut-line-content {
  display: block;
  height: 1px;
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(rgba(149, 171, 216, 0)),
    color-stop(50%, #95abd8),
    to(rgba(149, 171, 216, 0))
  );
  background: linear-gradient(
    270deg,
    rgba(149, 171, 216, 0) 0%,
    #95abd8 50%,
    rgba(149, 171, 216, 0) 100%
  );
}
</style>
