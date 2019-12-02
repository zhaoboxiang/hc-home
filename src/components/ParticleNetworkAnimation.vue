<template>
  <canvas id="pna"></canvas>
</template>

<script>
export default {
  name: "ParticleNetworkAnimation",
  data() {
    return {
      npa:{}
    };
  },
  methods: {
    init: function(element) {
      let ctx = element.getContext('2d');
      console.log(ctx)
      // this.npa.particleNetwork = new ParticleNetwork(this);
      // this.npa.bindUiActions();
      console.log(this)
      return this;
    },
  },
  mounted(){
    let e_canvas = document.getElementById('pna');
    this.init(e_canvas)
  }
};
</script>

<style scoped></style>
