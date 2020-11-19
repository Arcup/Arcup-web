<template>
  <v-main>
    <base-header></base-header>
    <v-divider></v-divider>
    <div class="container__deep" id="containerDeep">
      <v-row class="mb-6" no-gutters>
        <v-col :offset-md="isSizeLapTop() ? 3 : 12" offset-lg="3">
          <v-carousel
            :show-arrows="false"
            cycle
            :height="isLarge() || isExtraLarge() ? 400 : 250"
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
      <v-row class="d-flex justify-end mr-5" id="rowMainCards">
        <v-hover v-for="(item, index) in itemsPaquetes" :key="index">
          <template v-slot:default="{ hover }">
            <v-card
              class="mr-0 ml-4 mb-5 transition-swing card__main"
              :max-width="sizeCard"
              height="380"
              :elevation="hover ? 24 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-img
                :src="item.src"
                height="100px"
                class="white--text align-end"
                gradient="to bottom, #161e2eff, rgba(22,30,45,.8)"
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
              <v-divider></v-divider>
              <v-card-text>
                <p class="text--primary text-justify">
                  {{ item.description }}
                </p>
                <p class="gray--text font-italic">{{ item.price }}</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <router-link :to="{ name: 'Package' }" class="text-decoration-none">
                <v-btn depressed text outlined color="cyan"> Ver más </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-row>
    </div>
    <div class="container__angle">
      <v-col
        lg="7"
        :md="isSizeLapTop() ? 8 : 12"
        sm="12"
        xl="7"
        class="ml-12 mt-10"
        id="columnTextMain"
      >
        <v-col class="white--text">
          <h1>
            Construimos software de calidad a la medida, creamos tu página y se
            la mostramos al <strong>mundo.</strong>
          </h1>
        </v-col>
        <v-col class="mt-16">
          <v-row>
            <v-col md="4">
              <router-link :to="{ name: 'About' }" class="text-decoration-none">
                <v-btn elevation="2" large  color="white">
                  <strong class="">Conócemos </strong></v-btn
                >
              </router-link>
            </v-col>
            <v-col md="4">
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
import BaseHeader from "@/components/BaseHeader.vue";
//  Se importan las imágenes que serán utilizadas en el carousel
import imgProject from "../assets/title-images/image-project.png";
import imgCulture from "../assets/title-images/image-culture.png";
import imgContact from "../assets/title-images/image-contact.png";
import imgTechnology from "../assets/title-images/image-technology.png";

export default {
  name: "Main",
  data() {
    return {
      items: [
        {
          src: imgProject,
        },
        {
          src: imgCulture,
        },
        {
          src: imgContact,
        },
        {
          src: imgTechnology,
        },
      ],
      itemsPaquetes: [
        {
          src:
            "https://www.senecacollege.ca/content/dam/projects/seneca/program-pages/afp.jpg",
          name: "Ventas",
          price: "$7,199 - $14,899",
          pages: "De 5 a 12 páginas",
          description:
            "Administra tu negocio desde internet, háblanos del giro de tu empresa y creamos un sistema a tu medida. Autónomo. Organizado. Funcional",
        },
        {
          src:
            "https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg",
          name: "Informativo",
          price: "$1,500 - $2,899",
          pages: "De 1 a 4 páginas",
          description:
            "Muéstrale al mundo quién eres. Creamos tu página web de manera rápida y eficiente. Emprendedores. Estudiantes. Empresas.",
        },

        {
          src:
            "https://www.akamai.com/us/en/multimedia/images/callout/akamai-mobile-app-performance-analysis-report-callout.jpg?imwidth=720",
          name: "App Móvil",
          price: "$5,899 - $19,899",
          pages: "Android y/o iOS",
          description:
            "¿Quieres hacer una aplicación móvil?. Crea tu propia app sin ser programador. Descárgala desde la Play Store y/o App Store.",
        },
      ],
    };
  },
  methods: {
    isLarge: function () {
      return this.$vuetify.breakpoint.lgOnly;
    },
    isExtraLarge: function () {
      return this.$vuetify.breakpoint.xlOnly;
    },
    isSizeLapTop: function () {
      return this.$vuetify.breakpoint.width > 1241 &&
        this.$vuetify.breakpoint.width < 1400
        ? true
        : false;
    },
  },
  computed: {
    sizeCard() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 300
        case "sm":
          return 280
        case "md":
          return this.isSizeLapTop() ? 210 : 300;
        case "lg":
          return this.isSizeLapTop() ? 210 : 280;
        case "xl":
          return 310
      }
      return 0
    },
  },
  components: {
    BaseHeader,
  },
};
</script>
<style lang='css' scoped>
@font-face {
  font-family: RoundedElegance;
  src: url("../assets/Rounded_Elegance.ttf");
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
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