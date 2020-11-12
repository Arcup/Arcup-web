<template>
  <v-main>
    <base-header></base-header>
    <v-divider></v-divider>
    <div class="container__deep" id="containerDeep">
      <v-row class="mb-6" no-gutters>
        <v-col md="7" offset-md="5" id="colMainCarousel">
          <v-carousel
            :show-arrows="false"
            cycle
            height="320"
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
      <v-row class="d-flex justify-end" id="rowMainSheets">
        <v-sheet
          color="blue lighten-5"
          v-for="(item, index) in itemsPaquetes"
          :key="index"
          height="250"
          width="183"
          class="container__sheets rounded-xl"
          outlined
          style="opacity: 0.8"
          id="sheetMain"
        >
          <p class="d-flex font-weight-black justify-center">{{ item.name }}</p>
          <h1 class="d-flex justify-center">{{ item.price }}</h1>
          <p class="d-flex justify-center">{{ item.description }}</p>
        </v-sheet>
      </v-row>
    </div>
    <div class="container__angle">
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
      itemsPaquetes: [
        {
          name: "Básico",
          price: "$1,500",
          description: "Este es un ejemplo de descripción",
        },
        {
          name: "Intermedio",
          price: "$7,000",
          description: "Esta es otra descripción ejemplo",
        },
        {
          name: "Avanzado",
          price: "$12,000",
          description: "La última descripción de ejemplo",
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
.container__sheets {
  margin-right: 58px;
}
.container__deep {
  position: absolute;
  height: 100%;
  width: 100%;
}
.container__angle {
  display: flex;
  position: relative;
  height: 100%;
  background-image: url("../assets/fondo-main-arcup.svg");
}

.size__fontText {
  font-size: 28px;
}
</style>