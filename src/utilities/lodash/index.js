import lodash from "lodash";

const VueLodash = {
  install: function(Vue, name = "$_") {
    // Vue.prototype.$_ = function (lodash) {
    //   return lodash;
    // };
    Object.defineProperty(Vue.prototype, name, { value: lodash });

    Vue.mixin({
      mounted() {
        // Just tell you that it is mounted
        // console.log('VueLodash');
      }
    });

    if (typeof window !== "undefined" && window.Vue) {
      window.Vue.use(VueLodash);
    }
  }
};

export default VueLodash;
