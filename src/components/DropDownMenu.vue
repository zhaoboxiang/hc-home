<template>
  <div class="drop-down-box">
    <div
      class="menu-items-wrap"
      v-for="(menu, index) in this.menuItems"
      :key="index"
    >
      <div @click="hideMenu">
        <a
          :class="['menu-item', { 'a-exact-active': menu.isActive }]"
          :href="`${menu.name}.html`"
        >
          {{ menu.title }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDownMenu",
  props: {
    menuItems: Array
  },
  data() {
    return {
      isVisible: -1
    };
  },
  methods: {
    hideMenu() {
      this.$emit("hideOnClick", this.isVisible);
    }
  },
  mounted() {
    //解决方案二级导航active样式控制
    let pathName = window.location.pathname;
    for (let i = 0; i < this.menuItems.length; i++) {
      this.menuItems[i].isActive = false;
      if (pathName.includes(this.menuItems[i].name)) {
        this.menuItems[i].isActive = true;
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/global";
.drop-down-box {
  position: absolute;
  top: 68px;
  z-index: 2;
  left: 16px;
  background: rgba(247, 249, 255, 1);
  border-radius: 6px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

a.menu-item {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  color: @font-color;
  background: rgba(255, 255, 255, 1);
  /*box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.06);*/
  border-radius: 0 0 2px 2px;
}
a.menu-item.a-exact-active {
  border: none !important;
  /*border-bottom: none;*/
  color: rgba(48, 60, 168, 1);
  text-decoration: none;
  text-underline: none;
}

a.menu-item:hover {
  color: rgba(48, 60, 168, 1);
  text-decoration: none;
  text-underline: none;
}
</style>
