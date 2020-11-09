<template>
  <v-main>
    <div class="space__background"></div>
    <div class="space__backgroundAngle">
        <div>
            <span class="white--text font__arcup ml-6">arcup</span>
        </div>
    </div>
  </v-main>
</template>
<script>
export default {
  name: "Main",
};
</script>
<style lang='css'>
@font-face {
    font-family: RoundedElegance;
    src: url('../assets/Rounded_Elegance.ttf');
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
.font__arcup {
    font-family: RoundedElegance;
    font-size: 38px;
}
</style>