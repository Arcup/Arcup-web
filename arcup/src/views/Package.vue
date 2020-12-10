<template>
  <div>
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-package.png"
      max-width="100%"
      max-height="300"
    ></v-img>
    <div class="background-gray text-center py-10">
      <v-icon size="50" color="cyan">mdi-web </v-icon>
              <h1 class="text-center fontTitleContainer">
                Páginas web 
              </h1>
               <v-card flat height="2" color="cyan" width="275" class="mx-auto"></v-card>
              <h4 class="text-center fontSubtitleContainer">
                Encuentra tu paquete ideal o personalízalo con nosotros
              </h4>
              <p class="text-center fontDescriptionPrice">
                Los precios pueden variar dependiendo del proyecto*
              </p>
    </div>
    <div>
      <v-container class="mt-4">
        <v-sheet height="100%" width="100%" class="fill-height" flat>
          <v-row v-for="(item, i) in itemWebPages" :key="i" class="mx-4 my-4">
            <v-card width="100%" elevation="2" class="rounded-r-xl">
              <v-row no-gutters>
                <v-col cols="12" md="8">
                  <v-container class="ml-4">
                    <v-row class="mr-4">
                      <v-col>
                        <h2 class="fontTitleCard">{{ item.title }}</h2>
                        <p class="fontDescriptionCard mb-0">
                          {{ item.description }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row class="mr-4">
                      <v-col>
                        <v-row
                          v-for="(advantageOne, i) in item.groupAdvantageOne"
                          :key="i"
                        >
                          <p>
                            <v-icon color="green"> mdi-check-circle </v-icon>
                            <span class="ml-2">{{ advantageOne }}</span>
                          </p>
                        </v-row>
                      </v-col>
                      <v-col>
                        <v-row
                          v-for="(advantageTwo, i) in item.groupAdvantageTwo"
                          :key="i"
                        >
                          <p>
                            <v-icon color="green"> mdi-check-circle </v-icon>
                            <span class="ml-2">{{ advantageTwo }}</span>
                          </p>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col cols="12" md="4">
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-sheet
                        :elevation="hover ? 5 : 1"
                        height="100%"
                        rounded
                        max-width="100%"
                        class="transition-swing rounded-r-xl"
                      >
                        <v-container
                          fill-height
                          align-content-center
                          justify-center
                        >
                          <v-row>
                            <v-col
                              class="text-center pt-0 mt-0 pb-0 mb-0"
                              cols="12"
                            >
                              <h3 class="fontTitlePrice">
                                {{ item.titlePrice }}
                              </h3>
                            </v-col>
                            <v-col
                              class="text-center pt-0 mt-0 pb-0 mb-0"
                              cols="12"
                            >
                              <h4 class="color-text-gray">
                                Encuentra este paquete desde:
                              </h4>
                            </v-col>
                            <v-col
                              class="text-center pt-0 mt-0 pb-0 mb-0"
                              cols="12"
                            >
                              <p class="fontPrice">
                                {{ item.price }}
                                <span class="fontPriceMx">/mx</span>
                              </p>
                            </v-col>
                            <v-col
                              class="text-center pt-0 mt-0 pb-0 mb-0"
                              cols="12"
                            >
                              <p class="fontDescriptionPrice">
                                {{ item.descriptionPrice }}
                              </p>
                            </v-col>
                          </v-row>
                          <router-link
                            :to="{ name: 'Contact' }"
                            class="text-decoration-none with-100"
                          >
                            <v-btn dark block @click="scrollTop">
                              Adquirir
                            </v-btn>
                          </router-link>
                        </v-container>
                      </v-sheet>
                    </template>
                  </v-hover>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-sheet>
      </v-container>
    </div>
    <div class="background-gray text-center py-10">
      <v-icon size="50" color="cyan">mdi-cellphone </v-icon>
              <h1 class="text-center fontTitleContainer">
                App Móvil
              </h1>
               <v-card flat height="2" color="cyan" width="275" class="mx-auto"></v-card>
              <h4 class="text-center fontSubtitleContainer">
                Háblanos de tu idea y hagámosla realidad
              </h4>
              <p class="text-center fontDescriptionPrice">
                Los precios pueden variar dependiendo del proyecto*
              </p>
    </div>
    <div>
      <v-container class="mt-4">
        <v-sheet height="100%" width="100%" class="fill-height" flat>
          <v-row v-for="(item, i) in itemApp" :key="i" class="mx-4 my-4">
            <v-card width="100%" elevation="2" class="rounded-r-xl">
              <v-row no-gutters>
                <v-col cols="12" md="8">
                  <v-container class="ml-4">
                    <v-row class="mr-4">
                      <v-col>
                        <h2 class="fontTitleCard">{{ item.title }}</h2>
                        <p class="fontDescriptionCard mb-0">
                          {{ item.description }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-divider></v-divider>
                    <v-row class="mr-4">
                      <v-col>
                        <v-row
                          v-for="(advantageOne, i) in item.groupAdvantageOne"
                          :key="i"
                        >
                          <p>
                            <v-icon color="green"> mdi-check-circle </v-icon>
                            <span class="ml-2 text-justify">{{
                              advantageOne
                            }}</span>
                          </p>
                        </v-row>
                      </v-col>
                      <v-col>
                        <v-row
                          v-for="(advantageTwo, i) in item.groupAdvantageTwo"
                          :key="i"
                        >
                          <p>
                            <v-icon color="green"> mdi-check-circle </v-icon>
                            <span class="ml-2">{{ advantageTwo }}</span>
                          </p>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-col>
                <v-col cols="12" md="4" align="center">
                  <v-hover>
                    <template v-slot:default="{ hover }">
                      <v-sheet
                        :elevation="hover ? 5 : 1"
                        height="100%"
                        rounded
                        width="100%"
                        class="transition-swing rounded-r-xl"
                      >
                        <v-container
                          fill-height
                          align-content-center
                          justify-center
                        >
                          <v-row>
                            <v-col
                              class="text-center pt-0 mt-0 pb-0 mb-0"
                              cols="12"
                            >
                              <h3 class="fontTitlePrice">
                                {{ item.titlePrice }}
                              </h3>
                            </v-col>
                            <v-col
                              class="text-center pt-0 mt-0 pb-0 mb-0"
                              cols="12"
                            >
                            </v-col>
                            <v-col
                              class="text-center pt-0 mt-0 pb-0 mb-0"
                              cols="12"
                            >
                              <p class="fontPrice">
                                {{ item.price }}
                                <span class="fontPriceMx"></span>
                              </p>
                            </v-col>
                            <v-col
                              class="text-center pt-0 mt-0 pb-0 mb-0"
                              cols="12"
                            >
                              <p class="fontDescriptionPrice">
                                {{ item.descriptionPrice }}
                              </p>
                            </v-col>
                          </v-row>
                          <router-link
                            :to="{ name: 'Contact' }"
                            class="text-decoration-none with-100"
                          >
                            <v-btn dark block @click="scrollTop">
                              Adquirir
                            </v-btn>
                          </router-link>
                        </v-container>
                      </v-sheet>
                    </template>
                  </v-hover>
                </v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-sheet>
      </v-container>
    </div>
    <div class="text-center pt-16 pb-16 color-background-gray">
      <v-container class="text-center">
        <v-icon size="80" class="pb-3" color="cyan"
          >mdi-clock-check-outline
        </v-icon>
        <h3 class="fontTitle-contact pb-5">
          Descubre las caraterísticas de nuestros servicios
        </h3>
        <router-link :to="{ name: 'YourProject' }" class="text-decoration-none">
          <v-btn
            text
            class="color-background-black"
            color="white"
            @click="scrollTop"
            >VER MÁS</v-btn
          >
        </router-link>
      </v-container>
    </div>
    <base-footer></base-footer>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "Package",
  data: () => ({
    itemWebPages: [
      {
        title: "Informativo",
        titlePrice: "Paquete Informativo",
        price: "$3,200",
        groupAdvantageOne: [
          "De 3 a 5 páginas",
          "Servicio de atención 24/7",
          "Código QR",
        ],
        groupAdvantageTwo: [
          "Entrega entre 10 - 15 días",
          "Sitio totalmente responsiva",
          "Hosting / Dominio por 1 año",
        ],
        descriptionPrice: "Incluye 3 páginas, dominio y hosting por un año.",
        description:
          "¿Quieres mostrarle al mundo quién eres, qué haces y cómo lo haces?. Este paquete " +
          "es el ideal para ti.",
      },
      {
        title: "Auto-administrable",
        titlePrice: "Paquete Auto-administrable",
        price: "$9,700",
        groupAdvantageOne: [
          "De 3 a 10 elementos administrables",
          "Servicio de atención 24/7",
          "De 6 a 12 páginas",
          "Página de administrador",
        ],
        groupAdvantageTwo: [
          "Entrega entre 20 - 45 días",
          "Sitio totalmente responsiva",
          "Hosting / Dominio por 1 año",
          "Código QR",
        ],
        descriptionPrice:
          "Incluye 6 páginas, 3 elementos administrables, hosting y dominio por un año.",
        description:
          "Administra el contenido de tu web en el momento que quieras. Obtén completa libertad con nuestro paquete auto-administrable.",
      },
      {
        title: "Negocios",
        titlePrice: "Paquete Negocios",
        price: "$15,500",
        groupAdvantageOne: [
          "Entrega entre 1 - 2 meses",
          "Servicio de atención 24/7",
          "De 6 a 12 páginas",
          "Roles de usuario",
        ],
        groupAdvantageTwo: [
          "Administrar artículos",
          "Proceso de venta de principio a fin",
          "De 3 a 10 elementos administrables",
          "Hosting / Dominio por 1 año",
        ],
        descriptionPrice:
          "Incluye 6 páginas, 3 elementos administrables, administración de artículos y proceso de venta.",
        description:
          "Controla tu negocio desde internet, ofrece tus servicios, administra tus productos y véndelos en línea.",
      },
    ],
    itemApp: [
      {
        title: "App Móvil",
        titlePrice: "Paquete App Móvil",
        price: "",
        groupAdvantageOne: [
          "Publicación Play Store o App Store",
          "Revisiones constantes de avances",
          "Servicio de atención 12/7",
        ],
        groupAdvantageTwo: [
          "Diseño moderno",
          "Adaptable para todos los teléfonos",
        ],
        descriptionPrice:
          "Contáctanos para proporcionarte más información y conocer tu proyecto",
        description:
          "Únete al mundo de los smartphones creando tu propia aplicación móvil.",
      },
      {
        title: "App Móvil & Página Web",
        titlePrice: "Paquete App & Página Web",
        price: "",
        groupAdvantageOne: [
          "Publicación en Play Store o App Store",
          "Revisiones constantes de avances",
          "Accede a tu información desde tu página web y/o tu dispositivo móvil.",
        ],
        groupAdvantageTwo: [
          "Diseño moderno",
          "Adaptable para todos los teléfonos",
          "Servicio de atención 12/7",
        ],
        descriptionPrice:
          "Contáctanos para proporcionarte más información y conocer tu proyecto.",
        description:
          "El ecosistema completo te ayudará a maximizar tu productividad. Evoluciona al siguiente nivel con nuestro paquete de Página web y Aplicación móvil.",
      },
      {
        title: "App móvil multiplataforma",
        titlePrice: "Paquete Android y iOS",
        price: "",
        groupAdvantageOne: [
          "Publicación en Play Store y App Store",
          "Versión para IOS y Android",
          "Revisiones constantes de avances",
        ],
        groupAdvantageTwo: [
          "Diseño moderno",
          "Adaptable para todos los teléfonos",
          "Servicio de atención 12/7",
        ],
        descriptionPrice:
          "Contáctanos para proporcionarte más información y conocer tu proyecto",
        description:
          "No te cierres solo a un mercado, crea una aplicación multiplataforma para que todos los usuarios puedan conectarse.",
      },
    ],
  }),
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
   metaInfo() {
    return {
      title: "Paquetes | Arcup",
      meta: [
        {
          name: "description",
          content: "Conoce nuestros paquetes de desarrollo de software y elige tu mejor opción. Desarrollamos tu página web o apliación móvil.",
        },
      ],
    };
  },
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>
<style lang="css" scoped>
.fontTitleContainer {
  font-family: Mazzard;
  font-size: 46px;
}
.fontSubtitleContainer {
  font-family: GilroyLight;
  font-size: 16px;
}
.fontTitleCard {
  font-family: Mazzard;
  font-size: 34px;
}
.fontTitle-contact {
  font-family: Mazzard;
  font-size: 15px;
}
.fontDescriptionCard {
  font-family: GilroyLight;
  font-size: 18px;
}
.fontDescriptionPrice {
  font-family: GilroyLight;
  font-size: 12px;
}
.fontTitlePrice {
  font-family: Mazzard;
  font-size: 26px;
}
.fontPrice {
  font-family: GilroyBold;
  font-size: 40px;
}
.fontPriceMx {
  font-family: Mazzard;
  font-size: 20px;
}
.bottom-gradient {
  background-image: linear-gradient(
    to bottom,
    rgba(250, 250, 250, 1) 50%,
    transparent 72px
  );
}
.color-text-gray {
  color: rgb(158, 157, 157);
}
.color-background-gray {
  background-color: rgb(245, 245, 245);
}
.color-background-black {
  background-color: #161e2eff;
}
.with-100 {
  width: 100%;
}
.background-gray{
  background-color: rgb(248, 248, 248);
}
</style>