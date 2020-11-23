<template>
  <v-main>
    <base-header></base-header>
    <div class="container__deep" id="containerDeep">
      <v-row no-gutters>
        <v-col>
          <v-carousel
            :show-arrows="false"
            cycle
            :height="sizeCarousel"
            hide-delimiter-background
          >
            <v-carousel-item
              v-for="(item, i) in itemsCarousel"
              :key="i"
              :src="isMobile ? item.srcMobil : item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-container v-show="isMobile" class="container__description mb-6">
        <v-col md="6" sm="12" xs="12">
          <v-col class="white--text">
            <h1 class="fontMainText">
              Construimos software de calidad a la medida, creamos tu página y
              se la mostramos al <strong>mundo.</strong>
            </h1>
          </v-col>
          <v-col class="mt-4" md="6" sm="12" xs="12">
            <v-row>
              <v-col xs="2" sm="4" md="6" class="d-flex">
                <router-link
                  :to="{ name: 'About' }"
                  class="text-decoration-none"
                >
                  <v-btn
                    elevation="2"
                    :large="!isSuperSmall"
                    :small="isSuperSmall"
                    color="white"
                    class="d-flex mr-4"
                  >
                    <strong class="">Conócemos </strong>
                  </v-btn>
                </router-link>
                <router-link
                  :to="{ name: 'Contact' }"
                  class="text-decoration-none"
                >
                  <v-btn
                    elevation="2"
                    outlined
                    :large="!isSuperSmall"
                    :small="isSuperSmall"
                    color="white"
                    class="d-flex"
                  >
                    <strong>Empecemos </strong>
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
      </v-container>
      <v-row class="d-flex justify-center container__cards">
        <v-hover
          v-for="(item, index) in itemsPaquetes"
          :key="index"
          class="mt-5"
        >
          <template v-slot:default="{ hover }">
            <v-card
              class="mx-4 mb-5 transition-swing card__main"
              :max-width="sizeCard"
              height="auto"
              :elevation="hover ? 24 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="item.src"
                height="100px"
                class="white--text align-end"
              >
                <v-card-title class="display-1 white--text">
                  {{ item.name }}
                </v-card-title>
                <v-card-subtitle
                  class="subtitle-1 font-weight-thin white--text"
                >
                  {{ item.pages }}
                </v-card-subtitle>
              </v-img>

              <v-card-text class="mt-4 ml-4">
                <p class="fontPrice">
                  {{ item.price }} <span class="fontPriceMx">/mx</span>
                </p>
                <span class="fontDescriptionCard mr-5">
                  {{ item.description }}
                </span>
              </v-card-text>
              <v-divider></v-divider>
              <v-container>
                <v-list>
                  <v-subheader>Incluye</v-subheader>
                  <v-list-item
                    v-for="(advantage, i) in item.advantages"
                    :key="i"
                  >
                    <v-icon color="green"> mdi-check </v-icon>
                    <v-list-item-title class="fontAdvantage ml-4">
                      {{ advantage }}</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
                <router-link
                  :to="{ name: 'Package' }"
                  class="text-decoration-none"
                >
                  <v-btn
                    block
                    class="fontVerMas white-button"
                    color="#161e2eff"
                  >
                    Ver más
                  </v-btn>
                </router-link>
              </v-container>
            </v-card>
          </template>
        </v-hover>
      </v-row>
    </div>
    <div class="container__angle" v-show="!isMobile">
      <v-col lg="6" md="5" class="ml-12 mt-8" id="columnTextMain">
        <v-col class="white--text">
          <h1 class="fontMainText">
            Construimos software de
            <span class="fontMainTextUp">calidad</span> a la medida, creamos tu
            <span class="fontMainTextUp">página</span> y se la mostramos al
            <span class="fontMainTextUp">mundo.</span>
          </h1>
        </v-col>
        <v-col class="mt-10">
          <v-row>
            <v-col md="5" lg="3" xl="4">
              <router-link :to="{ name: 'About' }" class="text-decoration-none">
                <v-btn elevation="2" large color="white">
                  <strong class="">Conócemos </strong></v-btn
                >
              </router-link>
            </v-col>
            <v-col md="5" lg="3" xl="4">
              <router-link
                :to="{ name: 'Contact' }"
                class="text-decoration-none"
              >
                <v-btn elevation="2" large outlined color="white">
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
//  Adding components to use insade Main component
import BaseHeader from "@/components/BaseHeader.vue";

//  Adding image to Carousel resolution: md, lg, xl
import imgMonitorProject from "../assets/carousel-images/carousel-project.png";
import imgMonitorCulture from "../assets/carousel-images/carousel-culture.png";
import imgMonitorContact from "../assets/carousel-images/carousel-contact.png";
import imgMonitorTechnology from "../assets/carousel-images/carousel-technology.png";
import imgMonitorStory from "../assets/carousel-images/carousel-history.png";
import imgMonitorPackage from "../assets/carousel-images/carousel-packages.png";
import imgMonitorSoftware from "../assets/carousel-images/carousel-software.png";

//  Adding image to Carousel resolution: sm, xs
import imgMobileProject from "../assets/title-images/image-project.png";
import imgMobileCulture from "../assets/title-images/image-culture.png";
import imgMobileContact from "../assets/title-images/image-contact.png";
import imgMobileTechnology from "../assets/title-images/image-technology.png";
import imgMobileStory from "../assets/title-images/image-story.png";
import imgMobilePackage from "../assets/title-images/image-package.png";
import imgMobileSoftware from "../assets/title-images/image-software.png";

//  Adding images to Card
import imgCardApp from "../assets/card-images/card-app.png";
import imgCardInfo from "../assets/card-images/card-info.png";
import imgCardSales from "../assets/card-images/card-sales.png";

export default {
  name: "Main",
  data() {
    return {
      itemsCarousel: [
        {
          src: imgMonitorContact,
          srcMobil: imgMobileContact,
        },
        {
          src: imgMonitorPackage,
          srcMobil: imgMobilePackage,
        },
        {
          src: imgMonitorSoftware,
          srcMobil: imgMobileSoftware,
        },
        {
          src: imgMonitorTechnology,
          srcMobil: imgMobileTechnology,
        },
        {
          src: imgMonitorProject,
          srcMobil: imgMobileProject,
        },
        {
          src: imgMonitorCulture,
          srcMobil: imgMobileCulture,
        },
        {
          src: imgMonitorStory,
          srcMobil: imgMobileStory,
        },
      ],
      itemsPaquetes: [
        {
          src: imgCardSales,
          name: "Ventas",
          price: "$7,199",
          pages: "De 5 a 12 páginas",
          description:
            "Administra tu negocio desde internet. Autónomo. Organizado. Funcional.",
          advantages: [
            "Código QR ",
            "Página de administrador",
            "Hosting por 1 año",
            "Dominio personalizado (.com)",
          ],
        },
        {
          src: imgCardInfo,
          name: "Informativo",
          price: "$1,500",
          pages: "De 1 a 4 páginas",
          description:
            "Muéstrale al mundo quién eres. Emprendedores. Estudiantes. Empresas.",
          advantages: [
            "Código QR ",
            "Hosting por 1 año",
            "Dominio personalizado (.com)",
          ],
        },

        {
          src: imgCardApp,
          name: "App Móvil",
          price: "$5,899",
          pages: "Android y/o iOS",
          description:
            "Crea tu propia app sin ser programador. Accesible. Personalizada. Ligera.",
          advantages: [
            "Código QR ",
            "Aplicación en una tienda",
            "Mantenimiento 24/7",
          ],
        },
      ],
    };
  },
  computed: {
    isSuperSmall() {
      return this.$vuetify.breakpoint.width <= 320 ? true : false;
    },
    isMobile() {
      return this.$vuetify.breakpoint.smOnly || this.$vuetify.breakpoint.xsOnly;
    },
    sizeCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 260;
        case "sm":
          return 280;
        case "md":
          return 310;
        case "lg":
          return 340;
        case "xl":
          return 400;
      }
      return 0;
    },
    sizeCarousel() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 250;
        case "sm":
          return 250;
        case "md":
          return 430;
        case "lg":
          return 430;
        case "xl":
          return 430;
      }
      return 0;
    },
  },
  components: {
    BaseHeader,
  },
};
</script>
<style lang='css' scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.9;
}
.card__main {
  z-index: 1;
}
.container__description {
  background-color: #161e2eff;
}
.container__cards {
  background-color: #f4f3f3;
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
}
.white-button {
  color: white;
}

.fontMainText {
  font-family: GilroyLight;
  font-size: 30px;
}
.fontMainTextUp {
  font-family: GilroyBold;
  font-size: 32px;
}
.fontPrice {
  font-family: GilroyBold;
  font-size: 36px;
}
.fontPriceMx {
  font-family: Mazzard;
  font-size: 20px;
}
.fontVerMas {
  font-family: GilroyLight;
  font-size: 16px;
}
.fontDescriptionCard {
  font-family: GilroyLight;
  font-size: 14px;
}
.fontAdvantage {
  font-family: GilroyLight;
  font-size: 15px;
}
</style>