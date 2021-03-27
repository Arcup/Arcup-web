<template>
  <div>
    <preloader></preloader>
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
              class="grey darken-4 pointer"
              v-for="(item, i) in itemsCarousel"
              :key="i"
              :src="isMobile ? item.srcMobil : item.src"
              @click="clickCarousel(item.name)"
            >
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-container v-show="isMobile" class="container__description_mobile">
        <v-col md="6" sm="12" xs="12">
          <v-col class="white--text">
            <h1 class="font__main-alter-xs">
              Construimos software de
              <span class="color-text-cyan">calidad</span> a la medida, creamos
              tu proyecto y se lo mostramos al
              <strong class="color-text-cyan">MUNDO</strong>.
            </h1>
            <h4 class="font__main-alter">
              Estamos listos para brindarte nuestros servicios.
            </h4>
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
      <div class="background-cards-b pt-16 pb-16">
        <div class="text-center pb-10 pr-5 pl-5">
          <h2 class="font__main-alter">¡CONOCE NUESTROS PAQUETES</h2>
          <h1 class="font__main-alter">
            Y ELGIGE TU <span class="color-text-card"> MEJOR OPCIÓN</span>!
          </h1>
        </div>
        <v-row class="d-flex justify-center ml-0 mr-0">
          <v-hover
            v-for="(item, index) in itemsPaquetes"
            :key="index"
            class="mt-5"
          >
            <template v-slot:default="{ hover }">
              <v-card
                class="mx-4 mb-5 transition-swing card__main border-card"
                :max-width="sizeCard"
                height="auto"
                :elevation="hover ? 24 : 2"
                :class="{ 'on-hover': hover }"
              >
                <div class="text-center pt-5">
                  <h1 class="font__main-alter">
                    {{ item.name }}
                    <v-icon color="cyan">{{ item.icon }}</v-icon>
                  </h1>
                  <div class="subtitle-1 font-weight-thin pt-0 mt-0">
                    {{ item.pages }}
                  </div>
                  <!--<div
                    class="subtitle-1 font-weight-thin pt-0 mt-0 font-paquete"
                  >
                    Encuentra este paquete desde:
                  </div>-->
                  <v-card-text class="mt-2">
                    <p class="fontPrice">
                      {{ item.price }}
                      <span class="fontPriceMx">{{ item.typePrice }}</span>
                    </p>
                    <span class="fontDescriptionCard mr-5">
                      {{ item.description }}
                    </span>
                  </v-card-text>
                </div>
                <v-container class="background-gray">
                  <v-list class="background-gray">
                    <v-subheader class="">Incluye:</v-subheader>
                    <v-list-item
                      class="background-gray"
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
                      @click="scrollTop"
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
      <div class="container__description pt-2 pb-2">
        <div class="text-center">
          <h1 class="font_items ml-10 my-2">
            Algunas de nuestras características
          </h1>
        </div>
        
        <v-carousel cycle hide-delimiters :show-arrows="false" height="auto">
          <v-carousel-item>
            <v-row class="mx-4">
              <v-col
                cols="12"
                md="4"
                sm="12"
                v-for="(item, i) in firstPerformance"
                :key="i"
              >
                <v-card color="#161e2eff" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.name"
                      ></v-card-title>

                      <v-card-subtitle
                        v-text="item.description"
                      ></v-card-subtitle>
                    </div>

                    <v-avatar class="ma-3" size="110" tile>
                      <v-icon size="50" color="cyan">{{ item.icon }}</v-icon>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
          <v-carousel-item>
            <v-row class="mx-4">
              <v-col
                cols="12"
                md="4"
                sm="12"
                v-for="(item, i) in secondPerformance"
                :key="i"
              >
                <v-card color="#161e2eff" dark>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title
                        class="headline"
                        v-text="item.name"
                      ></v-card-title>

                      <v-card-subtitle
                        v-text="item.description"
                      ></v-card-subtitle>
                    </div>

                    <v-avatar class="ma-3" size="110" tile>
                      <v-icon size="50" color="cyan">{{ item.icon }}</v-icon>
                    </v-avatar>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </div>
      <base-footer></base-footer>
    </div>

    <div class="container__angle" v-show="!isMobile">
      <v-col cols="12" md="10" class="ml-12 mt-8" id="columnTextMain">
        <v-col class="white--text">
          <h1 class="font__main-alter">
            Construimos software de
            <span class="font__main-alter color-text-cyan">calidad</span> a la
            medida, creamos tu proyecto y se lo mostramos al
            <span class="font__main-alter color-text-cyan">MUNDO</span>.
          </h1>
          <h4 class="font__main-alter">
            Estamos listos para brindarte nuestros servicios.
          </h4>
        </v-col>
        <v-col class="mt-1">
          <v-row>
            <v-col cols="12" md="4">
              <router-link :to="{ name: 'About' }" class="text-decoration-none">
                <v-btn elevation="2" large color="white">
                  <strong class="">Conócemos </strong></v-btn
                >
              </router-link>
            </v-col>
            <v-col cols="12" md="4">
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
    
  </div>
</template>
<script>
//  Adding components to use insade Main component
import BaseHeader from "@/components/BaseHeader.vue";
import Preloader from "@/components/Preloader.vue";
import BaseFooter from "@/components/BaseFooter.vue";


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

export default {
  name: "Main",
  data() {
    return {
      itemsCarousel: [
        {
          src: imgMonitorContact,
          srcMobil: imgMobileContact,
          name: "Contact",
        },
        {
          src: imgMonitorPackage,
          srcMobil: imgMobilePackage,
          name: "Package",
        },
        {
          src: imgMonitorSoftware,
          srcMobil: imgMobileSoftware,
          name: "Software",
        },
        {
          src: imgMonitorTechnology,
          srcMobil: imgMobileTechnology,
          name: "Technology",
        },
        {
          src: imgMonitorProject,
          srcMobil: imgMobileProject,
          name: "YourProject",
        },
        {
          src: imgMonitorCulture,
          srcMobil: imgMobileCulture,
          name: "About",
        },
        {
          src: imgMonitorStory,
          srcMobil: imgMobileStory,
          name: "Story",
        },
      ],
      contError: 0,
      itemsPaquetes: [
        {
          name: "Informativo",
          price: "Single Page",
          typePrice: "",
          icon: "mdi-information-outline",
          pages: "Completamente personalizado",
          description:
            "Muéstrale al mundo quién eres. Emprendedores. Estudiantes. Empresas.",
          advantages: [
            "Diseño moderno e innovador",
            "Amigable e intuitivo",
            "Envío de correos desde el sistema",
            "Dominio personalizado (.com.mx)",
          ],
        },
        {
          name: "Administrable",
          price: "CMS System",
          typePrice: "",
          icon: "mdi-cog-outline",
          pages: "Sistema web y sistema administrador",
          description:
            "Administra el contenido de tu web en el momento que quieras.",
          advantages: [
            "Página de administrador",
            "Control de usuarios",
            "Personalizable a cualquier giro",
            "Servicio al cliente",
          ],
        },
        {
          name: "App Móvil",
          price: "Contáctanos",
          typePrice: "",
          icon: "mdi-cellphone",
          pages: "Android y/o iOS",
          description:
            "Crea tu propia app sin ser programador. Accesible. Personalizada. Ligera.",
          advantages: [
            "Publicación en una tienda",
            "Personalizada al 100%",
            "Alamcenamiento de información",
            "Diseño moderno",
          ],
        },
      ],
      firstPerformance: [
        {
          name: "SEO",
          description: "Tu página en los primeros resultados de búsqueda",
          icon: "mdi-search-web",
        },
        {
          name: "Soporte 24/7",
          description:
            "Aseguramos que tu página se mantenga activa y establecemos tiempos para mantenimiento",
          icon: "mdi-face-agent",
        },
        {
          name: "SSL",
          description:
            "Minimizamos el riesgo de ataques a tu sitio web con un certificado de seguridad",
          icon: "mdi-lock",
        },
      ],
      secondPerformance: [
        {
          name: "Diseño UX",
          description:
            "Garantizamos un sitio web intuitivo y adaptado a tu público",
          icon: "mdi-lightbulb-on-outline",
        },
        {
          name: "Responsivo",
          description:
            "¡Todo en uno! implementamos diseños adaptables a dispositivos móviles",
          icon: "mdi-monitor-cellphone",
        },
        {
          name: "Servidor dedicado",
          description:
            "Centralizamos tu información en nuestro servidor dedicado asegurando la confidencialidad",
          icon: "mdi-server",
        },
      ],
    };
  },
  methods: {
    clickCarousel(view) {
      this.$router.push({ name: view }).catch(() => {});
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
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
          return 350;
        case "sm":
          return 300;
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
  metaInfo() {
    return {
      title: "Arcup",
      meta: [
        {
          name: "description",
          content:
            "Arcup | Construimos software de calidad a la medida, creamos tu proyecto y se lo mostramos al MUNDO. Desarrollamos tu página web o apliación móvil.",
        },
      ],
    };
  },
  components: {
    BaseHeader,
    Preloader,
    BaseFooter
  },
};
</script>
<style lang='css' scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 1;
}
.card__main {
  z-index: 1;
}
.container__description {
  background-color: #fafafa;
}
.container__description_mobile {
  background-color: #161e2eff;
}
.container__cards {
  background-color: #fafafa;
}
.background-gray {
  background-color: rgb(248, 248, 248);
}
.background-cards-b {
  background: linear-gradient(
    to bottom,
    rgb(235, 235, 235) 0%,
    rgb(249, 249, 249) 50%,
    rgb(255, 255, 255) 61%
  );
}
.border-card {
  border-style: solid;
  border-color: cyan;
  border-width: 1px;
}
.color-text-card {
  color: rgb(2, 204, 204);
}
.color-text-cyan {
  color: cyan;
}
.container__deep {
  position: absolute;
  height: 100% auto;
  width: 100%;
}

.container__angle {
  display: flex;
  position: absolute;
  width: 60%;
  height: 100%;
  background-size: cover;
}
.white-button {
  color: white;
}
.font-paquete {
  color: rgb(126, 126, 126);
  font-size: 5px;
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
.fontAdvantage-card-subtitle {
  font-family: GilroyLight;
  font-size: 25px;
}
.font__main-alter-xs {
  font-family: Mazzard;
  font-size: 20px;
}
.font_items {
  font-family: Mazzard;
  font-size: 28px;
}
.pointer {
  cursor: pointer;
}
</style>