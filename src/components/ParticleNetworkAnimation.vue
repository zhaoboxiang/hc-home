<template>
  <canvas id="pna"></canvas>
</template>

<script>
export default {
  name: "ParticleNetworkAnimation",
  data() {
    return {};
  },
  methods: {
    init: function(element) {
      let ctx = element.getContext('2d');
      console.log(ctx)
    }

  },
  mounted(){
    let e_canvas = document.getElementById('pna');
    this.init(e_canvas)
  }
};
</script>

<style scoped></style>
