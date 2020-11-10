<template>
  <v-main>
    <div class="space__background"></div>
    <div class="space__backgroundAngle">
      <base-header></base-header>
    </div>
  </v-main>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'

export default {
  name: "Main",
  components: {
    BaseHeader,
  }
};
</script>
<style lang='css'>
@font-face {
  font-family: RoundedElegance;
  src: url("../assets/Rounded_Elegance.ttf");
}
.space__background {
  height: 50%;
  width: 100%;
  background-size: 800px auto;
  background-color: bisque;
  position: absolute;
}
.space__backgroundAngle {
  position: relative;
  height: 100%;
  background-size: 170% auto;
  background-position-x: -1000px;
  background-position-y: 0px;
  background-image: url("../assets/fondo-main-arcup.svg");
}
</style>