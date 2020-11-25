<template>
  <div>
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-package.png"
      max-width="100%"
      max-height="300"
    ></v-img>
    <v-container class="mt-4">
      <v-sheet
        height="100%"
        width="100%"
        class="fill-height"
        flat
      >
        <v-row>
          <v-col cols="12">
            <h1 class="text-center fontTitleContainer">Páginas web</h1>
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
              <v-col cols="8">
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
                        v-for="(advantageOne,
                        i) in item.groupAdvantageOne"
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
                        v-for="(advantageTwo,
                        i) in item.groupAdvantageTwo"
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
              <v-col cols="4" align="center" >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-sheet
                      :elevation="hover ? 5 : 1"
                      height="100%"
                      rounded
                      width="100%"
                      class="transition-swing rounded-r-xl"
                    >
                      <v-container fill-height align-content-center justify-center>
                        <h3 class="fontTitlePrice">
                          {{ item.titlePrice }}
                        </h3>
                        <p class="fontPrice">
                          {{ item.price }}
                          <span class="fontPriceMx">/mx</span>
                        </p>
                        <p class="fontDescriptionPrice">
                          {{ item.descriptionPrice }}
                        </p>
                          <v-btn dark block> Adquirir </v-btn>
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
        <v-container class="mt-4">
      <v-sheet
        height="100%"
        width="100%"
        class="fill-height"
        flat
      >
        <v-row>
          <v-col cols="12">
            <h1 class="text-center fontTitleContainer">App Móvil</h1>
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
              <v-col cols="8">
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
                        v-for="(advantageOne,
                        i) in item.groupAdvantageOne"
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
                        v-for="(advantageTwo,
                        i) in item.groupAdvantageTwo"
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
              <v-col cols="4" align="center" >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-sheet
                      :elevation="hover ? 5 : 1"
                      height="100%"
                      rounded
                      width="100%"
                      class="transition-swing rounded-r-xl"
                    >
                      <v-container fill-height align-content-center justify-center>
                        <h3 class="fontTitlePrice">
                          {{ item.titlePrice }}
                        </h3>
                        <p class="fontPrice">
                          {{ item.price }}
                          <span class="fontPriceMx">/mx</span>
                        </p>
                        <p class="fontDescriptionPrice">
                          {{ item.descriptionPrice }}
                        </p>
                          <v-btn dark block> Adquirir </v-btn>
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
        titlePrice: "Paquete informativo",
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
        titlePrice: "Paquete administrativo",
        price: "$7,900",
        groupAdvantageOne: [
          "Código QR",
          "Servicio de atención 24/7",
          "De 6 a 12 páginas",
          "Página de administrador"
        ],
        groupAdvantageTwo: [
          "Entrega entre 15 - 30 días",
          "Página totalmente responsiva",
          "Dominio incluido por 1 año (.com)",
        ],
        descriptionPrice:
          "Un pago al inicio del proyecto y se liquida una vez entregada la página web.",
        description: "Administra tu negocio desde internet. Contacta de manera directa con tus clientes. Mantén tu información seguro y accesible en cualquier momento.",
      },
    ],
    itemApp: [
      {
        title: "Simple App Móvil",
        titlePrice: "Paquete simple app móvil",
        price: "5,500",
        description: "Este es un ejemplo de descripción",
      },
      {
        title: "App & Página web",
        titlePrice: "Paquete app & página web",
        price: "20,900",
        description: "Esta página web es aún más cara OMG!",
      },
      {
        title: "App móvil",
        titlePrice: "Android y/o iOS",
        price: "$19,899",
        description:
          "¿Quieres hacer una aplicación móvil?. Crea tu propia app sin ser programador. Descárgala desde la Play Store y/o App Store.",
      },
    ],
  }),
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
</style>