<template>
  <v-main>
    <div class="space__background">
      <v-row class="mb-6" no-gutters>
        <v-col md="7" offset-md="5">
          <v-carousel
            :show-arrows="false"
            cycle
            height="380"
            hide-delimiter-background
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row class="mb-6 d-flex justify-end" no-gutters>
        <v-sheet color="teal" elevation="4" height="250" shaped width="183" class="mr-13">
        </v-sheet>
        <v-sheet color="teal" elevation="4" height="250" shaped width="183" class="mr-13">
        </v-sheet
        ><v-sheet color="teal" elevation="4" height="250" shaped width="183" class="mr-13">
        </v-sheet>
      </v-row>
    </div>
    <div class="space__backgroundAngle">
      <base-header></base-header>
      <v-col cols="4" md="6" class="ml-12 mt-10">
        <v-col class="white--text">
          <h1>
            Construimos software de calidad a la medida, creamos tu página y se
            la mostramos al <strong>mundo.</strong>
          </h1>
        </v-col>
        <v-col class="mt-16">
          <v-row>
            <v-col cols="4">
              <router-link :to="{ name: 'About' }" class="text-decoration-none">
                <v-btn elevation="2" large rounded color="white">
                  <strong class="">Conócemos </strong></v-btn
                >
              </router-link>
            </v-col>
            <v-col cols="4">
              <router-link
                :to="{ name: 'Contact' }"
                class="text-decoration-none"
              >
                <v-btn elevation="2" large outlined rounded color="white">
                  <strong>Empecemos </strong>
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </div>
  </v-main>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  name: "Main",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
  components: {
    BaseHeader,
  },
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
.size__fontText {
  font-size: 28px;
}
</style>