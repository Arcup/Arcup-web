<template>
  <v-expand-x-transition close-delay="0.5">
    <div v-if="show" class="preloader">
      <div class="fullScreen">
        <div class="width">
          <v-row class="row-center">
            <v-img
              width="250"
              src="../assets/logo-Arcup-SFondoN.png"
            ></v-img>
            <v-progress-circular
              :size="45"
              class="circle mt-5"
              indeterminate
              color="cyan"
            ></v-progress-circular>
          </v-row>
        </div>
      </div>
    </div>
  </v-expand-x-transition>
</template>
<script>
export default {
  data() {
    return {
        show: true
    }
  },
  mounted() {
      this.showToogle()
  },
  methods: {
      showToogle: function() {
          setTimeout(() => {
              this.show = false;
          }, 1000)
      }
  },
  name: "Preloader",
};
</script>
<style scoped>
.row-center {
    align-content: center;
    justify-content: center;
}
.circle {
  margin-left: 1em;
}

.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  z-index: 5;
}
.fullScreen {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

</style>