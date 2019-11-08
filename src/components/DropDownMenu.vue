<template>
  <div class="drop-down-box">
    <div
      class="menu-items-wrap"
      v-for="(menu, index) in this.menuItems"
      :key="index"
    >
      <div @click="hideOnClick">
        <router-link :to="{ name: menu.name }">{{ menu.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDownMenu",
  props: {
    hasSubNav: {
      type: Boolean,
      default: false
    },
    menuItems: Array
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    hideOnClick() {
      this.$emit("hideMenu", this.isVisible);
    }
  },
  mounted() {
    console.log("this.props,", this.hasSubNav, this.menuItems);
  }
};
</script>

<style scoped>
.drop-down-box {
  position: absolute;
  top: 68px;
  z-index: 2;
  background: rgba(247, 249, 255, 1);
  border-radius: 6px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
</style>
