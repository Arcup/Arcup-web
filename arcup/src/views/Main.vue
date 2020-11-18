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
            height="400"
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
      <v-row class="d-flex justify-end mr-5" id="rowMainCards" >
        <v-card
          elevation="6"
          class="mx-3 mb-5 card__main"
          max-width="280"
          height="340"
          v-for="(item, index) in itemsPaquetes"
          :key="index"
        >
        <v-card-title class="display-1 text--primary font-weight-bold">
          {{ item.name }}
        </v-card-title>
        <v-card-subtitle class="subtitle-1 font-weight-thin">
          {{ item.pages }}
        </v-card-subtitle>
        <v-divider></v-divider>
          <v-card-text>
            <p class="text--primary">
              {{ item.description }}
            </p>
            <p class="deep-purple--text font-italic">{{ item.price }}</p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn text outlined rounded color="deep-purple accent-4 justify-center"> Ver más </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
    <div class="container__angle">
      <v-col lg="7" md="12" sm="12" xl="5" class="ml-12 mt-10" id="columnTextMain">
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
import BaseHeader from '@/components/BaseHeader.vue';
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
          name: "Ventas",
          price: "$7,199 - $14,899",
          pages: "De 5 a 12 páginas",
          description: "Administra tu negocio desde internet, háblanos del giro de tu empresa y creamos un sistema a tu medida. Autónomo. Organizado. Funcional",
        },
        {
          name: "Informativo",
          price: "$1,500 - $2,899",
          pages: "De 1 a 4 páginas",
          description: "Muéstrale al mundo quién eres. Creamos tu página web de manera rápida y eficiente. Emprendedores. Estudiantes. Empresas.",
        },
        
        {
          name: "App Móvil",
          price: "$5,899 - $19,899",
          pages: "Android y/o iOS",
          description: "¿Quieres hacer una aplicación móvil?. Crea tu propia app sin ser programador. Descárgala desde la Play Store y/o App Store.",
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
  background-size: cover;
  background-image: url("../assets/background-darkBlueMain.svg");
}

.size__fontText {
  font-size: 28px;
}
</style>