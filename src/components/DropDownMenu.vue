<template>
  <div class="drop-down-box">
    <div
      class="menu-items-wrap"
      v-for="(menu, index) in this.menuItems"
      :key="index"
    >
      <div @click="hideMenu">
        <router-link class="menu-item" :to="{ name: menu.name }">
          {{ menu.title }}</router-link
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
      isVisible: false
    };
  },
  methods: {
    hideMenu() {
      this.$emit("hideOnClick", this.isVisible);
    }
  }
};
</script>

<style scoped>
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

  background: rgba(255, 255, 255, 1);
  box-shadow: 0 8px 24px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0 0 2px 2px;
}
a.menu-item.router-link-exact-active.router-link-active {
  border: none !important;
}

a.menu-item:hover {
  color: rgba(48, 60, 168, 1);
  text-decoration: none;
  text-underline: none;
}
</style>
