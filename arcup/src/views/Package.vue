<template>
  <div>
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-package.png"
      max-width="100%"
      max-height="300"
    ></v-img>
    <div>
      <v-container class="mt-4">
        <v-sheet height="100%" width="100%" class="fill-height" flat>
          <v-row>
            <v-col cols="12">
              <h1 class="text-center fontTitleContainer">
                Páginas web <v-icon size="40" color="cyan">mdi-web </v-icon>
              </h1>
              <h4 class="text-center fontSubtitleContainer">
                Encuentra tu paquete ideal o personalízalo con nosotros
              </h4>
              <p class="text-center fontDescriptionPrice">
                Los precios pueden variar dependiendo del proyecto*
              </p>
            </v-col>
          </v-row>
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
                          <v-btn dark block @click="scrollTop"> Adquirir </v-btn>
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
    <div>
      <v-container class="mt-4">
        <v-sheet height="100%" width="100%" class="fill-height" flat>
          <v-row>
            <v-col cols="12">
              <h1 class="text-center fontTitleContainer">
                App Móvil
                <v-icon size="40" color="cyan">mdi-cellphone </v-icon>
              </h1>
              <h4 class="text-center fontSubtitleContainer">
                Háblanos de tu idea y hagámosla realidad
              </h4>
              <p class="text-center fontDescriptionPrice">
                Los precios pueden variar dependiendo del proyecto*
              </p>
            </v-col>
          </v-row>
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
                          <v-btn dark block @click="scrollTop"> Adquirir </v-btn>
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
      <v-container class="pb-10">
        <v-icon size="80" class="pb-3" color="cyan">mdi-clock-check-outline </v-icon>
        <h3 class="fontTitle-contact pb-5">
          Descubre las caraterísticas de nuestros servicios
        </h3>
        <router-link :to="{ name: 'YourProject' }" class="text-decoration-none">
          <v-btn text class="color-background-black" color="white" @click="scrollTop"
            >VER MAS</v-btn
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
        price: "$2,800",
        groupAdvantageOne: [
          "Código QR",
          "Servicio de atención 24/7",
          "De 1 a 5 páginas",
        ],
        groupAdvantageTwo: [
          "Entrega entre 10 - 15 días",
          "Página totalmente responsiva",
          "Dominio incluido por 1 año (.com)",
        ],
        descriptionPrice:
          "Un pago al inicio del proyecto y se liquida una vez entregada la página web.",
        description:
          "¿Quieres mostrarle al mundo quién eres, qué haces y cómo lo haces?. Este paquete " +
          "es el ideal para ti.",
      },
      {
        title: "Administrativo",
        titlePrice: "Paquete Administrativo",
        price: "$7,900",
        groupAdvantageOne: [
          "Código QR",
          "Servicio de atención 24/7",
          "De 6 a 12 páginas",
          "Página de administrador",
        ],
        groupAdvantageTwo: [
          "Entrega entre 15 - 30 días",
          "Página totalmente responsiva",
          "Dominio incluido por 1 año (.com)",
        ],
        descriptionPrice:
          "Un pago al inicio del proyecto y se liquida una vez entregada la página web.",
        description:
          "Administra tu negocio desde internet. Contacta de manera directa con tus clientes. Mantén tu información seguro y accesible en cualquier momento.",
      },
      {
        title: "Ventas",
        titlePrice: "Paquete Ventas",
        price: "$13,900",
        groupAdvantageOne: [
          "Entrega entre 30 - 40 días",
          "Servicio de atención 24/7",
          "De 6 a 12 páginas",
          "Página de administrador de inventario",
        ],
        groupAdvantageTwo: [
          "Listado de artículos",
          "Proceso de venta de principio a fin",
          "Página totalmente responsiva",
          "Dominio incluido por 1 año (.com)",
        ],
        descriptionPrice:
          "Un pago al inicio del proyecto y se liquida una vez entregada la página web.",
        description:
          "Vende tus productos en linea, administra tu tienda y permite que tus clientes " +
          "puedan comprar a travez de tu página web.",
      },
    ],
    itemApp: [
      {
        title: "App Móvil",
        titlePrice: "Paquete App Móvil",
        price: "5,500",
        groupAdvantageOne: [
          "Entrega entre 15 - 25 días",
          "Publicación en Play Store o App Store",
          "De 5 a 10 vistas",
          "Revisiones constantes de avances",
        ],
        groupAdvantageTwo: [
          "Funcionalidades que generen un valor agregado",
          "Diseño moderno",
          "Aplicación responsiva para todos los teléfonos",
          "Servicio de atención 24/7",
        ],
        descriptionPrice:
          "Un pago al inicio del proyecto y se liquida una vez entregada la aplicación móvil.",
        description:
          "Únete al mundo de los smartphones creando tu propia aplicación móvil",
      },
      {
        title: "App Móvil & Página Web",
        titlePrice: "Paquete App & Página Web",
        price: "20,900",
        groupAdvantageOne: [
          "Entrega entre 45 - 55 días",
          "Publicación de App en Play Store o App Store",
          "De 5 a 12 páginas web",
          "Revisiones constantes de avances",
        ],
        groupAdvantageTwo: [
          "Aplicación con funcionalidades que generen un valor agregado",
          "Diseño moderno",
          "Aplicación responsiva para todos los teléfonos",
          "Servicio de atención 24/7",
        ],
        descriptionPrice:
          "Un pago al inicio del proyecto y se liquida una vez entregadas la página web y aplicación móvil.",
        description:
          "El ecosistema completo te ayudará a maximizar tu productividad. Evoluciona el siguiente nivel con nuestro paquete de Página web y Aplicación móvil.",
      },
      {
        title: "App móvil multiplataforma",
        titlePrice: "Paquete Android y iOS",
        price: "$15,899",
        groupAdvantageOne: [
          "Entrega entre 40 - 50 días",
          "Publicación de App en Play Store y App Store",
          "De 5 a 12 vistas",
          "Revisiones constantes de avances",
        ],
        groupAdvantageTwo: [
          "Aplicación con funcionalidades que generen un valor agregado",
          "Diseño moderno",
          "Aplicación responsiva para todos los teléfonos",
          "Servicio de atención 24/7",
        ],
        descriptionPrice:
          "Un pago al inicio del proyecto y se liquida una vez entregadas las aplicaciones móviles.",
        description:
          "No te cierres solo a un mercado, crea una aplicación multiplataforma para que todos los usuarios puedan conectarse.",
      },
    ],
  }),
  methods:{
    scrollTop() {
      window.scrollTo(0, 0);
    },
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
.with-100{
  width: 100%;
}
</style>