<template>
  <v-main>
    <base-header></base-header>
    <v-divider></v-divider>
    <div class="container__deep" id="containerDeep">
      <v-row class="mb-6" no-gutters>
        <v-col offset-md="3" id="colMainCarousel">
          <v-carousel
            :show-arrows="false"
            cycle
            height="300"
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
      <v-row class="d-flex justify-end mr-2" id="rowMainCards" >
        <v-card
          class="ma-3 card__main"
          max-width="280"
          height="270"
          
          v-for="(item, index) in itemsPaquetes"
          :key="index"
        >
          <v-card-text>
            <p class="display-1 text--primary">{{ item.name }}</p>
            <p class="deep-purple--text">{{ item.price }}</p>
            <div class="text--primary">
              {{ item.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4"> Ver más </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
    <div class="container__angle">
      <v-col lg="6" md="12" sm="12" class="ml-12 mt-10" id="columnTextMain">
        <v-col class="white--text">
          <h1>
            Construimos software de calidad a la medida, creamos tu página y se
            la mostramos al <strong>mundo.</strong>
          </h1>
        </v-col>
        <v-col class="mt-16">
          <v-row justify-sm="left">
            <v-col md="4">
              <router-link :to="{ name: 'About' }" class="text-decoration-none">
                <v-btn elevation="2" large rounded color="white">
                  <strong class="">Conócemos </strong></v-btn
                >
              </router-link>
            </v-col>
            <v-col md="4">
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
//  Se importan las imágenes que serán utilizadas en el carousel
import imgProject from '../assets/title-images/image-project.png';
import imgCulture from '../assets/title-images/image-culture.png';
import imgContact from '../assets/title-images/image-contact.png';
import imgTechnology from '../assets/title-images/image-technology.png';

export default {
  name: "Main",
  data() {
    return {
      items: [
        {
          src:imgProject,
        },
        {
          src:imgCulture,
        },
        {
          src:imgContact,
        },
        {
          src:imgTechnology,
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
.card__main {
  z-index: 1;
}

.container__deep {
  position: absolute;
  height: 100% auto;
  width: 100%;
  
}
.container__angle {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 85%;
  background-image: url("../assets/background-darkBlueMain.svg");
}

.size__fontText {
  font-size: 28px;
}
</style>